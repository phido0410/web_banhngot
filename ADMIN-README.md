# 🎨 Admin Panel - Hướng dẫn sử dụng

## 🚀 Khởi động Admin Panel

### Cách 1: Dùng npm (Đơn giản nhất)
```bash
npm run admin
```
→ Server sẽ tự động chạy và mở trình duyệt!

### Cách 2: Chạy script trực tiếp
```bash
./start-admin.sh
```

### Cách 3: Chạy server thủ công
```bash
node admin-server.js
```
Sau đó mở: http://localhost:3001/admin-images.html

---

## 📝 Cách sử dụng

1. **Khởi động:** `npm run admin`
2. **Tìm ảnh:** Dùng filter hoặc search
3. **Nhập URL:** Paste link ảnh mới
4. **Preview:** Click "👁️ Xem"
5. **Cập nhật:** Click "💾 Cập nhật"
6. **Lưu tất cả:** Khi xong hết

→ **Ảnh được cập nhật NGAY vào file HTML!**

---

## ✅ Deploy lên Vercel

```bash
git add .
git commit -m "Update images"
git push
```

→ Vercel tự động deploy!

---

## 🔒 Bảo mật

File `admin-images.html` đã được thêm vào `.vercelignore`
→ Chỉ hoạt động trên local, không deploy lên production!

---

## 💡 Tips

- Server phải chạy mới sử dụng được admin panel
- Nhấn `Ctrl+C` để dừng server
- Dùng "📦 Backup" trước khi sửa nhiều ảnh
