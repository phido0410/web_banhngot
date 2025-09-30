#!/bin/bash

# Script để thay thế tất cả ảnh local bằng Unsplash URLs

# Bánh Hong Kong
sed -i '' 's|src="assets/images/egg-tart.jpg"|src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-ngot-hong-kong.html
sed -i '' 's|src="assets/images/pineapple-bun.jpg"|src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-ngot-hong-kong.html
sed -i '' 's|src="assets/images/char-siu-bao.jpg"|src="https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-ngot-hong-kong.html
sed -i '' 's|src="assets/images/cocktail-bun.jpg"|src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-ngot-hong-kong.html
sed -i '' 's|src="assets/images/wife-cake.jpg"|src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-ngot-hong-kong.html
sed -i '' 's|src="assets/images/custard-bun.jpg"|src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-ngot-hong-kong.html
sed -i '' 's|src="assets/images/steaming-process.jpg"|src="https://images.unsplash.com/photo-1556909114-4097cc40bb5a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-ngot-hong-kong.html
sed -i '' 's|src="assets/images/yum-cha-culture.jpg"|src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-ngot-hong-kong.html

# Blog.html
sed -i '' 's|src="assets/images/blog-featured.jpg"|src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog.html
sed -i '' 's|src="assets/images/macaron-vs-su-kem.jpg"|src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog.html
sed -i '' 's|src="assets/images/banh-bong-lan-tips.jpg"|src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog.html
sed -i '' 's|src="assets/images/hong-kong-dessert-trend.jpg"|src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog.html
sed -i '' 's|src="assets/images/healthy-desserts.jpg"|src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog.html
sed -i '' 's|src="assets/images/japanese-wagashi.jpg"|src="https://images.unsplash.com/photo-1607920591413-4ec007e70023?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog.html
sed -i '' 's|src="assets/images/birthday-cake-ideas.jpg"|src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog.html

# Bánh bông lan cuốn
sed -i '' 's|src="assets/images/roll-cake-hero.jpg"|src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-bong-lan-cuon.html
sed -i '' 's|src="assets/images/baking-sponge.jpg"|src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-bong-lan-cuon.html
sed -i '' 's|src="assets/images/strawberry-roll.jpg"|src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-bong-lan-cuon.html
sed -i '' 's|src="assets/images/chocolate-roll.jpg"|src="https://images.unsplash.com/photo-1549007174-22e5fa22b2a0?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-bong-lan-cuon.html
sed -i '' 's|src="assets/images/matcha-roll.jpg"|src="https://images.unsplash.com/photo-1607920591413-4ec007e70023?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-bong-lan-cuon.html
sed -i '' 's|src="assets/images/mango-roll.jpg"|src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-bong-lan-cuon.html
sed -i '' 's|src="assets/images/tiramisu-roll.jpg"|src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-bong-lan-cuon.html
sed -i '' 's|src="assets/images/coconut-roll.jpg"|src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-bong-lan-cuon.html
sed -i '' 's|src="assets/images/rolling-process.jpg"|src="https://images.unsplash.com/photo-1556909114-4097cc40bb5a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-bong-lan-cuon.html
sed -i '' 's|src="assets/images/serving-suggestion.jpg"|src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-bong-lan-cuon.html

# Bánh macaron
sed -i '' 's|src="assets/images/macaron-rainbow.jpg"|src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-macaron.html
sed -i '' 's|src="assets/images/quy-trinh-macaron.jpg"|src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' banh-macaron.html

# Blog files với relative paths
sed -i '' 's|src="../assets/images/macaron-vs-su-kem.jpg"|src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/macaron-vs-su-kem.html
sed -i '' 's|src="../assets/images/top-tiem-banh.jpg"|src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/macaron-vs-su-kem.html
sed -i '' 's|src="../assets/images/banh-bong-lan-tips.jpg"|src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/macaron-vs-su-kem.html
sed -i '' 's|src="../assets/images/macaron-making.jpg"|src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/macaron-vs-su-kem.html

sed -i '' 's|src="../assets/images/trending-bakeries.jpg"|src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/top-5-tiem-banh-ngot.html
sed -i '' 's|src="../assets/images/bakery-criteria.jpg"|src="https://images.unsplash.com/photo-1556909114-4097cc40bb5a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/top-5-tiem-banh-ngot.html
sed -i '' 's|src="../assets/images/french-style-bakery.jpg"|src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/top-5-tiem-banh-ngot.html
sed -i '' 's|src="../assets/images/instagram-worthy-bakery.jpg"|src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/top-5-tiem-banh-ngot.html
sed -i '' 's|src="../assets/images/bakery-trends-2024.jpg"|src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/top-5-tiem-banh-ngot.html

sed -i '' 's|src="../assets/images/banh-bong-lan-cuon-tutorial.jpg"|src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/bi-quyet-lam-banh-bong-lan-cuon.html
sed -i '' 's|src="../assets/images/macaron-making-advanced.jpg"|src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/bi-quyet-lam-banh-bong-lan-cuon.html
sed -i '' 's|src="../assets/images/user-swiss-roll-1.jpg"|src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3"|g' blog/bi-quyet-lam-banh-bong-lan-cuon.html

echo "Đã thay thế tất cả hình ảnh bằng Unsplash URLs!"
