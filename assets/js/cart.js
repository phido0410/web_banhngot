// Shopping Cart Functionality
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.init();
    }

    init() {
        this.updateCartUI();
        this.attachEventListeners();
    }

    loadCart() {
        const saved = localStorage.getItem('sweetDreamsCart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('sweetDreamsCart', JSON.stringify(this.items));
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            this.items.push(product);
        }

        this.saveCart();
        this.updateCartUI();
        this.showAddedMessage(product.name);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart();
            this.updateCartUI();
        }
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    updateCartUI() {
        const cartCount = document.querySelector('.cart-count');
        const count = this.getItemCount();

        if (cartCount) {
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    showAddedMessage(productName) {
        const message = document.createElement('div');
        message.className = 'add-to-cart-message';
        message.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                </svg>
                <span><strong>${productName}</strong> đã thêm vào giỏ hàng!</span>
            </div>
        `;

        document.body.appendChild(message);

        setTimeout(() => {
            message.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }

    attachEventListeners() {
        // Quantity buttons
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const input = btn.parentElement.querySelector('.qty-input');
                const currentValue = parseInt(input.value) || 1;

                if (btn.classList.contains('plus')) {
                    input.value = currentValue + 1;
                } else if (btn.classList.contains('minus')) {
                    input.value = Math.max(1, currentValue - 1);
                }
            });
        });

        // Add to cart button
        const addToCartBtn = document.querySelector('.btn-add-cart');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleAddToCart();
            });
        }

        // Buy now button
        const buyNowBtn = document.querySelector('.btn-buy-now');
        if (buyNowBtn) {
            buyNowBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleAddToCart();
                window.location.href = '../cart.html';
            });
        }

        // Thumbnail images
        document.querySelectorAll('.thumbnail-images .thumb').forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                document.querySelectorAll('.thumbnail-images .thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');

                const mainImage = document.querySelector('#mainProductImage');
                if (mainImage) {
                    mainImage.src = thumb.src.replace('w=200', 'w=800');
                }
            });
        });
    }

    handleAddToCart() {
        const productName = document.querySelector('.product-name')?.textContent.trim();
        const priceText = document.querySelector('.current-price')?.textContent.trim();
        const price = parseInt(priceText?.replace(/[^0-9]/g, '')) || 0;
        const quantity = parseInt(document.querySelector('.qty-input')?.value) || 1;
        const image = document.querySelector('#mainProductImage')?.src;
        const url = window.location.pathname;

        const product = {
            id: url.split('/').pop().replace('.html', ''),
            name: productName,
            price: price,
            quantity: quantity,
            image: image,
            url: url
        };

        this.addItem(product);
    }

    clear() {
        this.items = [];
        this.saveCart();
        this.updateCartUI();
    }
}

// Initialize cart when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.cart = new ShoppingCart();
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
