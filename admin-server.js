const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Cấu hình multer để upload file
const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        const uploadDir = path.join(__dirname, 'assets/images/uploads');
        try {
            await fs.mkdir(uploadDir, { recursive: true });
            cb(null, uploadDir);
        } catch (err) {
            cb(err);
        }
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext).replace(/[^a-z0-9]/gi, '-').toLowerCase();
        cb(null, name + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif|webp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Chỉ chấp nhận file ảnh (JPEG, PNG, GIF, WebP)!'));
        }
    }
});

// Danh sách các file HTML cần quét (bao gồm tất cả file products)
const HTML_FILES = [
    'index.html',
    'blog.html',
    'banh-ngot-hong-kong.html',
    'banh-bong-lan-cuon.html',
    'banh-macaron.html',
    'banh-mi-ngot.html',
    'banh-su-kem.html',
    'blog/macaron-vs-su-kem.html',
    'blog/top-5-tiem-banh-ngot.html',
    'blog/bi-quyet-lam-banh-bong-lan-cuon.html',
    'products/anpan-dau-do.html',
    'products/banh-bo-lo-bao.html',
    'products/banh-tart-trung-classic.html',
    'products/char-siu-bao.html',
    'products/chocolate-roll-decadent.html',
    'products/chocolate-spiral.html',
    'products/macaron-pistachio-sicilia.html',
    'products/macaron-rose-romantique.html',
    'products/macaron-salted-caramel.html',
    'products/matcha-roll-zen.html',
    'products/melon-pan-classic.html',
    'products/roll-cake-dau-tay.html',
    'products/su-kem-chocolate-dam-da.html',
    'products/su-kem-matcha-nhat-ban.html',
    'products/su-kem-vanilla-classic.html'
];

// API: Upload ảnh
app.post('/api/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Không có file nào được upload!' });
        }

        // Tạo URL tương đối từ root của website
        const imageUrl = `assets/images/uploads/${req.file.filename}`;

        res.json({
            success: true,
            message: 'Upload thành công!',
            filename: req.file.filename,
            path: imageUrl,
            url: imageUrl,
            size: req.file.size,
            mimetype: req.file.mimetype
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API: Lấy danh sách tất cả ảnh từ các file HTML
app.get('/api/images', async (req, res) => {
    try {
        const allImages = [];

        for (const file of HTML_FILES) {
            try {
                const filePath = path.join(__dirname, file);
                const content = await fs.readFile(filePath, 'utf-8');

                // Tìm tất cả thẻ img
                const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
                let match;

                while ((match = imgRegex.exec(content)) !== null) {
                    const src = match[1];
                    const alt = match[2];

                    // Chỉ lấy ảnh từ assets/images hoặc URL
                    if (src.includes('assets/images') || src.startsWith('http')) {
                        allImages.push({
                            file: file,
                            originalSrc: src,
                            currentSrc: src,
                            alt: alt || 'No description',
                            // Lấy tên file từ path
                            imageName: src.split('/').pop().split('?')[0]
                        });
                    }
                }
            } catch (err) {
                console.log(`Không thể đọc file ${file}: ${err.message}`);
            }
        }

        res.json(allImages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API: Cập nhật URL ảnh trong file HTML
app.post('/api/update-image', async (req, res) => {
    try {
        let { file, oldUrl, newUrl } = req.body;

        if (!file || !oldUrl || !newUrl) {
            return res.status(400).json({ error: 'Thiếu thông tin!' });
        }

        // Tự động điều chỉnh đường dẫn cho file trong thư mục con
        if (file.includes('/') && !newUrl.startsWith('http')) {
            // Đếm số cấp thư mục
            const depth = file.split('/').length - 1;
            const prefix = '../'.repeat(depth);

            // Nếu newUrl chưa có ../, thêm vào
            if (!newUrl.startsWith('../') && !newUrl.startsWith('/')) {
                newUrl = prefix + newUrl;
            }
        }

        const filePath = path.join(__dirname, file);
        let content = await fs.readFile(filePath, 'utf-8');

        // Escape special characters trong regex
        const escapedOldUrl = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Thay thế tất cả occurrences
        const regex = new RegExp(`src=["']${escapedOldUrl}["']`, 'g');
        const updatedContent = content.replace(regex, `src="${newUrl}"`);

        if (content === updatedContent) {
            return res.status(400).json({ error: 'Không tìm thấy URL để thay thế!' });
        }

        // Lưu file
        await fs.writeFile(filePath, updatedContent, 'utf-8');

        res.json({
            success: true,
            message: `Đã cập nhật ảnh trong ${file}`,
            changes: content !== updatedContent
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API: Cập nhật nhiều ảnh cùng lúc
app.post('/api/update-multiple', async (req, res) => {
    try {
        const { updates } = req.body;

        if (!updates || !Array.isArray(updates)) {
            return res.status(400).json({ error: 'Dữ liệu không hợp lệ!' });
        }

        const results = [];

        for (const update of updates) {
            try {
                const { file, oldUrl, newUrl } = update;
                const filePath = path.join(__dirname, file);
                let content = await fs.readFile(filePath, 'utf-8');

                const escapedOldUrl = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`src=["']${escapedOldUrl}["']`, 'g');
                const updatedContent = content.replace(regex, `src="${newUrl}"`);

                if (content !== updatedContent) {
                    await fs.writeFile(filePath, updatedContent, 'utf-8');
                    results.push({ file, success: true });
                } else {
                    results.push({ file, success: false, reason: 'Không tìm thấy' });
                }
            } catch (err) {
                results.push({ file: update.file, success: false, error: err.message });
            }
        }

        res.json({
            success: true,
            results,
            total: updates.length,
            successful: results.filter(r => r.success).length
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API: Backup tất cả file HTML
app.post('/api/backup', async (req, res) => {
    try {
        const backupDir = path.join(__dirname, 'backups');
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupFolder = path.join(backupDir, `backup-${timestamp}`);

        // Tạo thư mục backup
        await fs.mkdir(backupFolder, { recursive: true });

        // Copy tất cả file HTML
        for (const file of HTML_FILES) {
            try {
                const sourcePath = path.join(__dirname, file);
                const destPath = path.join(backupFolder, file);

                // Tạo thư mục con nếu cần
                await fs.mkdir(path.dirname(destPath), { recursive: true });
                await fs.copyFile(sourcePath, destPath);
            } catch (err) {
                console.log(`Không thể backup ${file}`);
            }
        }

        res.json({
            success: true,
            message: 'Đã backup thành công!',
            location: backupFolder
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════╗
║   🎨 ADMIN SERVER ĐANG CHẠY                  ║
║                                               ║
║   🌐 Admin Panel: http://localhost:${PORT}    ║
║   📝 API Endpoint: http://localhost:${PORT}/api ║
║                                               ║
║   ✅ Sẵn sàng quản lý ảnh!                    ║
╚═══════════════════════════════════════════════╝
    `);
});
