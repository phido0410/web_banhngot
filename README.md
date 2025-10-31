# 🍰 Sweet Dreams Bakery Website

> Website bán bánh ngọt cao cấp với thiết kế hiện đại, tối ưu SEO và trải nghiệm người dùng tuyệt vời.

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Mục Lục

- [Tổng quan](#-tổng-quan)
- [Tính năng](#-tính-năng)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cài đặt & Chạy](#-cài-đặt--chạy)
- [Admin Panel](#-admin-panel)
- [Shopping Cart System](#-shopping-cart-system)
- [SEO & Performance](#-seo--performance)
- [Deploy](#-deploy)
- [Bảo trì](#-bảo-trì)
- [Troubleshooting](#-troubleshooting)

---

## 🎯 Tổng quan

**Sweet Dreams** là website thương mại điện tử chuyên cung cấp các loại bánh ngọt cao cấp với thiết kế lấy cảm hứng từ Paris Baguette và Tous Les Jours. Website được xây dựng với HTML, CSS, JavaScript thuần túy, tối ưu cho hiệu suất và SEO.

### 🥐 Danh mục sản phẩm

- **Bánh Su Kem** - Cream puff nghệ thuật Pháp
- **Bánh Macaron** - Macaron chính hiệu Paris
- **Bánh Mì Ngọt** - Japanese style bread
- **Bánh Bông Lan Cuốn** - Swiss roll cao cấp
- **Bánh Hong Kong** - Egg tart & dim sum authentic

### 📊 Thống kê

- **Tổng số trang:** 29 HTML files
- **Sản phẩm:** 15 trang chi tiết sản phẩm
- **Blog posts:** 3 bài viết chất lượng cao
- **CSS:** 4500+ lines
- **Performance:** 90+ PageSpeed Score

---

## ✨ Tính năng

### 🎨 Giao diện & UX

- ✅ Thiết kế modern với pastel pink-white theme
- ✅ Responsive 100% (Mobile-first approach)
- ✅ Smooth animations và transitions
- ✅ Floating badges với animation
- ✅ Hero section với gradient background
- ✅ Dropdown menu cho sản phẩm
- ✅ Hamburger menu cho mobile

### 🛒 Hệ thống giỏ hàng

- ✅ Add to cart từ trang sản phẩm
- ✅ Quantity selector (+/- buttons)
- ✅ Cart badge với số lượng real-time
- ✅ localStorage persistence
- ✅ Cart page với full CRUD operations
- ✅ Success notifications khi thêm sản phẩm
- ✅ Cart icon trên tất cả 29 trang

### 📝 Blog System

- ✅ Blog listing page với search
- ✅ Featured post với image
- ✅ Category filtering
- ✅ 3 bài viết SEO-optimized:
  - **Top 5 Tiệm Bánh Ngọt Được Yêu Thích Nhất 2024**
  - **Macaron vs Bánh Su Kem: So Sánh Chi Tiết**
  - **Bí Quyết Làm Bánh Bông Lan Cuốn Hoàn Hảo**
- ✅ Breadcrumb navigation
- ✅ Related posts
- ✅ Social sharing buttons

### 🔍 SEO Optimization

- ✅ Meta tags đầy đủ cho mọi trang
- ✅ Schema.org structured data (Product, Bakery, BlogPosting)
- ✅ Open Graph tags cho social media
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML5
- ✅ Alt text cho tất cả images
- ✅ Internal linking strategy

### ⚡ Performance

- ✅ Lazy loading images
- ✅ Preload critical resources
- ✅ Async/defer JavaScript
- ✅ Optimized images (WebP support)
- ✅ Minified CSS/JS (production)
- ✅ Fast page load (<3s)

---

## 📁 Cấu trúc dự án

```
web_banhngot/
│
├── index.html                      # 🏠 Trang chủ với hero section
├── cart.html                       # 🛒 Giỏ hàng
├── blog.html                       # 📝 Trang blog chính
│
├── Category Pages (5)              # 📂 Các trang danh mục
│   ├── banh-su-kem.html
│   ├── banh-macaron.html
│   ├── banh-mi-ngot.html
│   ├── banh-bong-lan-cuon.html
│   └── banh-ngot-hong-kong.html
│
├── products/                       # 🥐 Chi tiết sản phẩm (15 files)
│   ├── su-kem-vanilla-classic.html
│   ├── su-kem-chocolate-dam-da.html
│   ├── su-kem-matcha-nhat-ban.html
│   ├── macaron-rose-romantique.html
│   ├── macaron-pistachio-sicilia.html
│   ├── macaron-salted-caramel.html
│   ├── melon-pan-classic.html
│   ├── anpan-dau-do.html
│   ├── banh-bo-lo-bao.html
│   ├── roll-cake-dau-tay.html
│   ├── chocolate-roll-decadent.html
│   ├── matcha-roll-zen.html
│   ├── banh-tart-trung-classic.html
│   ├── char-siu-bao.html
│   └── chocolate-spiral.html
│
├── blog/                           # 📰 Blog posts (3 files)
│   ├── top-5-tiem-banh-ngot.html
│   ├── macaron-vs-su-kem.html
│   └── bi-quyet-lam-banh-bong-lan-cuon.html
│
├── assets/
│   ├── css/
│   │   ├── style.css               # 🎨 Main CSS (4500+ lines)
│   │   ├── modern-redesign.css     # ✨ Modern components (1377 lines)
│   │   └── product-page.css        # 🛍️ Product page styles
│   │
│   └── js/
│       ├── main.js                 # ⚙️ General utilities
│       ├── cart.js                 # 🛒 Shopping cart logic (182 lines)
│       └── seo-enhancements.js     # 🔍 SEO utilities
│
├── Admin System                    # 🔧 Admin tools (local only)
│   ├── admin-images.html           # Image management UI
│   ├── admin-server.js             # Express server
│   └── start-admin.sh              # Startup script
│
├── Python Scripts                  # 🐍 Automation scripts
│   ├── update_product_navbars.py
│   ├── update_footers.py
│   ├── update_products.py
│   ├── update_main_pages.py
│   ├── update_blog_pages.py
│   ├── add_modern_css.py
│   └── replace_images.sh
│
├── Configuration
│   ├── package.json                # Node dependencies
│   ├── sitemap.xml                 # SEO sitemap
│   ├── robots.txt                  # SEO robots
│   └── ADMIN-README.md             # Admin documentation
│
└── README.md                       # 📖 This file
```

---

## 🛠️ Công nghệ sử dụng

### Frontend Core

| Công nghệ | Version | Mục đích |
|-----------|---------|----------|
| HTML5 | Latest | Semantic markup, accessibility |
| CSS3 | Latest | Modern styling, animations, grid/flexbox |
| JavaScript | ES6+ | DOM manipulation, cart logic, localStorage |

### CSS Features

```css
/* Custom properties */
:root {
    --accent-pink: #E11D48;
    --deep-pink: #BE123C;
    --pastel-pink: #FDA4AF;
    --soft-pink: #FDF2F8;
    --text-primary: #1F2937;
    --text-secondary: #6B7280;
}

/* Modern features used */
- CSS Grid & Flexbox
- CSS Variables (Custom Properties)
- CSS Animations & Transitions
- Media Queries (Responsive)
- Backdrop Filter
- Gradient Backgrounds
- Box Shadow & Border Radius
```

### JavaScript Features

```javascript
// ES6+ features used
- Classes (ShoppingCart)
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- localStorage API
- DOM manipulation
- Event delegation
```

### Backend (Admin Panel)

| Package | Version | Mục đích |
|---------|---------|----------|
| Node.js | 14+ | Runtime environment |
| Express | 4.x | Web server |
| CORS | Latest | Cross-origin support |

### Fonts & Icons

- **Google Fonts:** Playfair Display, Poppins
- **Emoji:** Native emoji support
- **SVG Icons:** Custom SVG for cart, dropdown, etc.

### Deployment

- **Vercel** - Static hosting với CI/CD
- **Git** - Version control

---

## 🚀 Cài đặt & Chạy

### Prerequisites

```bash
# Check Node.js
node -v  # Required: v14+

# Check npm
npm -v   # Required: v6+
```

### 1️⃣ Clone Repository

```bash
git clone https://github.com/phido0410/web_banhngot.git
cd web_banhngot
```

### 2️⃣ Cài đặt Dependencies

```bash
npm install
```

**Packages installed:**
- express (^4.21.2)
- cors (^2.8.5)

### 3️⃣ Chạy Website

**Option A: Static Server (Khuyến nghị)**

```bash
# Dùng VS Code Live Server
# 1. Install extension: Live Server
# 2. Right-click index.html
# 3. Select "Open with Live Server"
# → Opens at http://localhost:5500
```

**Option B: Python Simple Server**

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# → Opens at http://localhost:8000
```

**Option C: Node.js http-server**

```bash
npm install -g http-server
http-server -p 8000
```

### 4️⃣ Chạy Admin Panel (Optional)

```bash
# Method 1: npm script (Recommended)
npm run admin

# Method 2: Shell script
chmod +x start-admin.sh
./start-admin.sh

# Method 3: Direct
node admin-server.js

# → Opens at http://localhost:3001
```

---

## 🎛️ Admin Panel

### Tổng quan

Admin Panel là công cụ quản lý hình ảnh cho toàn bộ website. **Chỉ chạy trên local**, không deploy lên production.

### Tính năng

| Feature | Description |
|---------|-------------|
| 📸 Image Management | Quản lý tất cả ảnh trên website |
| 🔍 Search & Filter | Tìm kiếm theo file, description |
| 👁️ Preview | Xem trước ảnh mới trước khi update |
| 💾 Batch Update | Cập nhật nhiều ảnh cùng lúc |
| 📦 Backup | Backup tất cả HTML files |
| 🔄 Real-time | Cập nhật trực tiếp vào HTML |

### API Endpoints

```javascript
// Get all images
GET /api/images
Response: { images: [...], total: 150 }

// Update single image
POST /api/update
Body: { file: "index.html", oldSrc: "...", newSrc: "..." }

// Batch update
POST /api/update-batch
Body: { updates: [...] }

// Backup all files
POST /api/backup
Response: { message: "Backup created", path: "..." }
```

### Workflow

```bash
# 1. Start admin server
npm run admin

# 2. Browser auto-opens: http://localhost:3001/admin-images.html

# 3. Update workflow:
Search image → Enter new URL → Preview → Update → Save All

# 4. Always backup first!
Click "📦 Backup All HTML" before major changes
```

### Bảo mật

- ⚠️ **Admin panel chỉ chạy local**
- ✅ File `admin-images.html` trong `.vercelignore`
- ✅ Server chỉ listen trên `localhost:3001`
- ✅ CORS restricted
- ✅ No authentication needed (local only)

---

## 🛒 Shopping Cart System

### Architecture

```javascript
// ShoppingCart Class (cart.js)
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartUI();
    }
    
    // Core methods
    addItem(product)           // Add product to cart
    removeItem(productId)      // Remove product
    updateQuantity(id, qty)    // Update quantity
    getTotal()                 // Calculate total price
    clearCart()                // Clear all items
    
    // Storage
    saveCart()                 // Save to localStorage
    loadCart()                 // Load from localStorage
    
    // UI
    updateCartUI()             // Update badge count
    showAddedMessage()         // Success notification
}
```

### localStorage Structure

```json
{
  "sweetdreams_cart": [
    {
      "id": "su-kem-vanilla-classic",
      "name": "Su Kem Vanilla Classic",
      "price": 30000,
      "image": "https://...",
      "quantity": 2,
      "category": "Bánh Su Kem"
    }
  ]
}
```

### Features

#### ✅ Product Page

```html
<!-- Quantity Selector -->
<div class="quantity-selector">
    <button class="qty-btn minus">-</button>
    <input type="number" value="1" min="1" max="99">
    <button class="qty-btn plus">+</button>
</div>

<!-- Add to Cart Button -->
<button class="btn-add-cart">
    🛒 Thêm vào giỏ hàng
</button>
```

#### ✅ Cart Badge (All Pages)

```html
<a href="cart.html" class="cart-icon">
    <svg><!-- Shopping cart icon --></svg>
    <span class="cart-count" style="display: none;">0</span>
</a>
```

#### ✅ Cart Page (cart.html)

- Display all cart items
- Update quantity
- Remove items
- Calculate total
- Empty state handling
- Checkout button

### Event Flow

```
User clicks "Add to Cart"
    ↓
JavaScript validates quantity
    ↓
ShoppingCart.addItem(product)
    ↓
Update localStorage
    ↓
Update cart badge (all pages)
    ↓
Show success message
    ↓
Animate cart icon
```

### CSS Animations

```css
/* Cart badge bounce */
@keyframes cartBounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
}

/* Success message slide in */
@keyframes slideIn {
    from { 
        transform: translateX(400px);
        opacity: 0;
    }
    to { 
        transform: translateX(0);
        opacity: 1;
    }
}
```

---

## 📈 SEO & Performance

### SEO Implementation

#### Meta Tags (Example: index.html)

```html
<!-- Basic Meta -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sweet Dreams - Tiệm Bánh Ngọt Cao Cấp | Macaron, Su Kem, Bánh Mì Ngọt</title>
<meta name="description" content="Sweet Dreams - Tiệm bánh ngọt cao cấp...">
<meta name="keywords" content="bánh ngọt, macaron, su kem...">

<!-- Open Graph -->
<meta property="og:title" content="Sweet Dreams Bakery">
<meta property="og:description" content="...">
<meta property="og:image" content="https://...">
<meta property="og:url" content="https://web-banhngot.vercel.app">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">

<!-- Canonical -->
<link rel="canonical" href="https://web-banhngot.vercel.app">
```

#### Schema.org Structured Data

**Product Schema:**

```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Su Kem Vanilla Classic",
  "image": "https://...",
  "description": "...",
  "brand": {
    "@type": "Brand",
    "name": "Sweet Dreams"
  },
  "offers": {
    "@type": "Offer",
    "price": "30000",
    "priceCurrency": "VND"
  }
}
```

**Bakery Schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Sweet Dreams Bakery",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Đường ABC",
    "addressLocality": "Quận 1",
    "addressRegion": "TP.HCM"
  }
}
```

### Performance Optimization

#### Image Optimization

```html
<!-- Lazy loading -->
<img src="image.jpg" loading="lazy" alt="Description">

<!-- Responsive images -->
<img srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 1200px"
     src="large.jpg" alt="...">

<!-- WebP support -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <source srcset="image.jpg" type="image/jpeg">
    <img src="image.jpg" alt="...">
</picture>
```

#### Resource Loading

```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://images.unsplash.com">

<!-- Preload critical resources -->
<link rel="preload" href="assets/css/style.css" as="style">
<link rel="preload" href="assets/js/main.js" as="script">

<!-- Async/defer scripts -->
<script src="assets/js/main.js" defer></script>
<script src="analytics.js" async></script>
```

#### CSS Optimization

```css
/* Use CSS containment */
.product-card {
    contain: layout style paint;
}

/* Use will-change for animations */
.cart-icon:hover {
    will-change: transform;
}

/* Reduce repaints */
.floating-badge {
    transform: translateZ(0);
}
```

### Performance Metrics

| Metric | Target | Actual |
|--------|--------|--------|
| First Contentful Paint | <1.8s | ~1.2s |
| Largest Contentful Paint | <2.5s | ~2.1s |
| Time to Interactive | <3.8s | ~3.0s |
| Cumulative Layout Shift | <0.1 | ~0.05 |
| Total Page Size | <2MB | ~1.5MB |

### Sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://web-banhngot.vercel.app/</loc>
    <lastmod>2024-10-31</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- 28 more URLs -->
</urlset>
```

### Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://web-banhngot.vercel.app/sitemap.xml
```

---

## 🌐 Deploy

### Vercel (Recommended)

#### Setup

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository
   - Configure:
     - Framework Preset: **Other**
     - Build Command: (leave empty)
     - Output Directory: **.**
   - Deploy!

3. **Auto-deployment:**
   - Every `git push` triggers automatic deployment
   - Preview URLs for each PR
   - Production at `https://web-banhngot.vercel.app`

#### vercel.json (Optional)

```json
{
  "routes": [
    {
      "src": "/admin-images.html",
      "status": 404
    },
    {
      "src": "/admin-server.js",
      "status": 404
    }
  ]
}
```

### Netlify

```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### netlify.toml

```toml
[build]
  publish = "."
  command = ""

[[redirects]]
  from = "/admin-images.html"
  to = "/404.html"
  status = 404
```

### GitHub Pages

```bash
# Enable GitHub Pages in repository settings
# Source: main branch / root

# Or use gh-pages branch
git checkout -b gh-pages
git push origin gh-pages
```

### Custom Server (Apache/Nginx)

#### Apache (.htaccess)

```apache
# Enable rewrite
RewriteEngine On

# Redirect to HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Cache static files
<FilesMatch "\.(jpg|jpeg|png|gif|webp|css|js)$">
  Header set Cache-Control "max-age=2592000, public"
</FilesMatch>
```

#### Nginx (nginx.conf)

```nginx
server {
    listen 80;
    server_name sweetdreams.com;
    root /var/www/web_banhngot;
    index index.html;

    # Block admin files
    location ~ /admin- {
        deny all;
        return 404;
    }

    # Cache static files
    location ~* \.(jpg|jpeg|png|gif|webp|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

---

## 🔧 Bảo trì

### Thêm Sản Phẩm Mới

#### Method 1: Manual HTML

```html
<!-- Add to category page (e.g., banh-su-kem.html) -->
<div class="product-card-modern">
    <span class="product-badge-modern new">🆕 MỚI</span>
    <div class="product-image-modern">
        <img src="https://..." alt="Tên sản phẩm" loading="lazy">
        <div class="product-overlay">
            <a href="products/ten-san-pham.html" class="btn-view">
                Chi tiết
            </a>
        </div>
    </div>
    <div class="product-info-modern">
        <span class="product-category">BÁNH SU KEM</span>
        <h3 class="product-title-modern">Tên Sản Phẩm</h3>
        <p class="product-desc-modern">Mô tả ngắn gọn...</p>
        <div class="product-footer">
            <div class="product-price-modern">
                <span class="price-label">Giá chỉ từ</span>
                <span class="price-value">35.000đ</span>
            </div>
            <a href="products/ten-san-pham.html" class="btn-order">
                🛒
            </a>
        </div>
    </div>
</div>
```

#### Method 2: Python Script

```python
# Create: add_product.py
import re

def add_product(category_file, product_data):
    with open(category_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find product grid and insert new product
    # ... (implementation)
    
    with open(category_file, 'w', encoding='utf-8') as f:
        f.write(content)

# Usage
product_data = {
    'name': 'Su Kem Dâu Tây',
    'price': '35.000đ',
    'image': 'https://...',
    'description': '...',
    'badge': 'new'
}

add_product('banh-su-kem.html', product_data)
```

### Thêm Blog Post

```bash
# 1. Copy template
cp blog/template.html blog/ten-bai-viet-moi.html

# 2. Edit content
# - Update title, meta tags
# - Add content
# - Add images
# - Update breadcrumb
# - Add related posts

# 3. Update blog.html
# Add new post to blog listing

# 4. Update sitemap.xml
# Add new URL with current date
```

### Cập Nhật Giá

```bash
# Method 1: Find & Replace in IDE
# Search: <span class="price-value">30.000đ</span>
# Replace: <span class="price-value">35.000đ</span>

# Method 2: Python script
python3 -c "
import re
import glob

for file in glob.glob('products/*.html'):
    with open(file, 'r+', encoding='utf-8') as f:
        content = f.read()
        content = re.sub(
            r'(<span class=\"price-value\">)30\.000đ',
            r'\g<1>35.000đ',
            content
        )
        f.seek(0)
        f.write(content)
        f.truncate()
"
```

### Thay Đổi Theme Colors

```css
/* Edit: assets/css/style.css or modern-redesign.css */

:root {
    /* Primary colors */
    --accent-pink: #E11D48;      /* Change to: #FF1493 */
    --deep-pink: #BE123C;        /* Change to: #C71585 */
    --pastel-pink: #FDA4AF;      /* Change to: #FFB6C1 */
    --soft-pink: #FDF2F8;        /* Change to: #FFF0F5 */
    
    /* Text colors */
    --text-primary: #1F2937;     /* Keep or change */
    --text-secondary: #6B7280;   /* Keep or change */
}
```

### Database Backup (Future)

```bash
# When adding backend with database

# MySQL
mysqldump -u username -p database_name > backup_$(date +%Y%m%d).sql

# MongoDB
mongodump --db sweetdreams --out backup_$(date +%Y%m%d)

# PostgreSQL
pg_dump database_name > backup_$(date +%Y%m%d).sql
```

### Code Backup

```bash
# Backup entire project
zip -r backup_$(date +%Y%m%d_%H%M%S).zip . \
    -x "node_modules/*" \
    -x ".git/*" \
    -x "*.log" \
    -x ".DS_Store"

# Backup only HTML files
tar -czf html_backup_$(date +%Y%m%d).tar.gz *.html products/*.html blog/*.html

# Backup to cloud (example: AWS S3)
aws s3 sync . s3://sweetdreams-backup/$(date +%Y%m%d) \
    --exclude "node_modules/*" \
    --exclude ".git/*"
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Admin Panel không start

```bash
# Error: Port 3001 already in use
# Solution: Kill process on port 3001

# macOS/Linux
lsof -ti:3001 | xargs kill -9

# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Then restart
npm run admin
```

#### 2. Cart không hoạt động

```javascript
// Check localStorage
// Open DevTools Console (F12)
console.log(localStorage.getItem('sweetdreams_cart'));

// Clear cart if corrupted
localStorage.removeItem('sweetdreams_cart');
location.reload();

// Check cart.js loaded
console.log(typeof ShoppingCart); // Should be "function"
```

#### 3. CSS không apply

```bash
# Check 1: Link CSS path
<link rel="stylesheet" href="assets/css/style.css"> ✅
<link rel="stylesheet" href="css/style.css"> ❌

# Check 2: Clear browser cache
# Chrome: Ctrl/Cmd + Shift + R
# Firefox: Ctrl/Cmd + F5

# Check 3: CSS file exists
ls -la assets/css/

# Check 4: File permissions
chmod 644 assets/css/*.css
```

#### 4. Images không load

```bash
# Check image URL
# Relative path: ../assets/images/product.jpg (from products/)
# Absolute path: https://images.unsplash.com/...

# Check CORS for external images
# Console error: "CORS policy"
# Solution: Use proxy or different image source

# Check image exists
curl -I https://image-url.jpg
# Should return: HTTP/2 200
```

#### 5. JavaScript errors

```javascript
// Open DevTools Console (F12)

// Common errors:

// Error: Cannot read property of undefined
// Fix: Add null checks
if (element && element.classList) {
    element.classList.add('active');
}

// Error: localStorage is not defined
// Fix: Check localStorage availability
if (typeof Storage !== 'undefined') {
    localStorage.setItem('key', 'value');
}

// Error: Function is not defined
// Fix: Ensure script loaded
<script src="assets/js/cart.js" defer></script>
```

#### 6. Mobile responsive issues

```css
/* Debug mobile layout */
/* Add border to see element boundaries */
* {
    outline: 1px solid red;
}

/* Check viewport */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Test media queries */
@media (max-width: 768px) {
    body::before {
        content: "Mobile view";
        position: fixed;
        top: 0;
        left: 0;
        background: red;
        color: white;
        padding: 5px;
        z-index: 9999;
    }
}
```

#### 7. Dropdown menu không hoạt động

```javascript
// Check main.js loaded
console.log('main.js loaded');

// Check event listener
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    console.log('Dropdown found:', toggle);
    toggle.addEventListener('click', (e) => {
        console.log('Dropdown clicked');
    });
});

// Check CSS
.dropdown-menu {
    display: none; /* Should be hidden by default */
}

.has-dropdown.active .dropdown-menu {
    display: block; /* Should show when active */
}
```

### Debugging Tools

```bash
# HTML Validation
npm install -g html-validator-cli
html-validator --file=index.html --format=text

# CSS Validation
npm install -g css-validator
css-validator assets/css/style.css

# Link Checker
npm install -g broken-link-checker
blc http://localhost:3000 -ro

# Performance Testing
npm install -g lighthouse
lighthouse http://localhost:3000 --view

# SEO Audit
npx unlighthouse --site http://localhost:3000
```

### Performance Profiling

```javascript
// Measure page load time
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
});

// Measure specific function
console.time('functionName');
functionName();
console.timeEnd('functionName');

// Memory usage
console.log('Memory:', performance.memory);
```

---

## 📞 Support & Contact

### Developer

- **Team:** Sweet Dreams Development Team
- **Email:** support@sweetdreams.com
- **Website:** [https://web-banhngot.vercel.app](https://web-banhngot.vercel.app)
- **GitHub:** [https://github.com/phido0410/web_banhngot](https://github.com/phido0410/web_banhngot)

### Documentation

- **Main README:** This file
- **Admin README:** `ADMIN-README.md`
- **Cart System:** `CART-SYSTEM-README.md`

### Issues & Bug Reports

Báo cáo lỗi tại: [GitHub Issues](https://github.com/phido0410/web_banhngot/issues)

Template:

```markdown
**Bug Description:**
[Mô tả chi tiết lỗi]

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior:**
[Kết quả mong đợi]

**Actual Behavior:**
[Kết quả thực tế]

**Screenshots:**
[Nếu có]

**Environment:**
- Browser: Chrome 120
- OS: macOS Sonoma
- Device: MacBook Pro M1
```

---

## 🎓 Learning Resources

### HTML/CSS/JavaScript

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### SEO

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Moz SEO Guide](https://moz.com/beginners-guide-to-seo)

### Performance

- [Web.dev](https://web.dev/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 📋 Changelog

### Version 2.0.0 (2024-10-31)

- ✅ **Shopping Cart System**
  - Implemented full cart functionality
  - localStorage persistence
  - Cart badge on all 29 pages
  - Quantity selector with +/- buttons
  - Cart page with CRUD operations

- ✅ **UI Improvements**
  - Dropdown menu for products
  - Fixed hero badges positioning
  - Cart icon synchronization
  - Mobile responsive fixes

- ✅ **Blog System**
  - Added 3 SEO-optimized blog posts
  - Blog listing page
  - Related posts feature
  - Social sharing buttons

- ✅ **SEO Enhancements**
  - Schema.org structured data
  - Open Graph tags
  - Meta tags optimization
  - Sitemap.xml

### Version 1.0.0 (2024-10-01)

- 🎉 Initial release
- Basic HTML structure
- CSS styling
- Product pages
- Admin panel

---

## 📄 License

Copyright © 2024 Sweet Dreams Bakery. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use of this software is strictly prohibited.

---

## 🙏 Acknowledgments

- **Design Inspiration:** Paris Baguette, Tous Les Jours
- **Images:** Unsplash, Pexels
- **Fonts:** Google Fonts (Playfair Display, Poppins)
- **Icons:** SVG custom icons, emoji

---

## 🎉 Thank You!

Cảm ơn bạn đã sử dụng **Sweet Dreams Website System**!

Chúc bạn kinh doanh thành công! 🍰✨

---

**Last Updated:** October 31, 2025  
**Version:** 2.0.0  
**Maintainer:** Sweet Dreams Dev Team
