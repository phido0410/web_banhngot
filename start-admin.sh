#!/bin/bash

# Script khởi động Admin Panel

echo "🚀 Đang khởi động Admin Panel..."
echo ""

# Di chuyển vào thư mục đúng
cd "$(dirname "$0")"

# Kiểm tra node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 Đang cài đặt dependencies..."
    npm install
    echo ""
fi

# Mở trình duyệt sau 2 giây
(sleep 2 && open "http://localhost:3001/admin-images.html") &

# Khởi động server
echo "✅ Server đang chạy..."
echo "🌐 Admin Panel: http://localhost:3001/admin-images.html"
echo ""
echo "💡 Nhấn Ctrl+C để dừng server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

node admin-server.js
