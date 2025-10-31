/**
 * SEO Enhancements & UX Improvements
 * Sweet Dreams Bakery Website
 */

// ===== BACK TO TOP BUTTON =====
(function () {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);

    // Show/hide button based on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();

// ===== LAZY LOADING IMAGES (Optional - chỉ dùng khi cần) =====
(function () {
    // Chỉ áp dụng cho ảnh có class 'lazy-load'
    const lazyImages = document.querySelectorAll('img.lazy-load');

    if ('IntersectionObserver' in window && lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback: load all images immediately
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
            img.classList.add('loaded');
        });
    }
})();

// ===== IMAGE ERROR HANDLING =====
(function () {
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
            console.warn('Image failed to load:', e.target.src);
        }
    }, true);
})();

// ===== EXTERNAL LINKS - OPEN IN NEW TAB =====
(function () {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');

            // Add visual indicator for external links
            if (!link.querySelector('.external-icon')) {
                const icon = document.createElement('span');
                icon.className = 'external-icon';
                icon.innerHTML = ' ↗';
                icon.style.fontSize = '0.85em';
                icon.style.opacity = '0.6';
                link.appendChild(icon);
            }
        }
    });
})();

// ===== PERFORMANCE MONITORING =====
(function () {
    // Log Core Web Vitals if available
    if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP)
        try {
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
            console.warn('LCP monitoring not supported');
        }

        // First Input Delay (FID)
        try {
            const fidObserver = new PerformanceObserver((list) => {
                list.getEntries().forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
            console.warn('FID monitoring not supported');
        }

        // Cumulative Layout Shift (CLS)
        try {
            let clsScore = 0;
            const clsObserver = new PerformanceObserver((list) => {
                list.getEntries().forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsScore += entry.value;
                        console.log('CLS:', clsScore);
                    }
                });
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
            console.warn('CLS monitoring not supported');
        }
    }
})();

// ===== ACCESSIBILITY - KEYBOARD NAVIGATION =====
(function () {
    // Highlight focused elements for keyboard users
    let isKeyboardUser = false;

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            isKeyboardUser = true;
            document.body.classList.add('keyboard-user');
        }
    });

    window.addEventListener('mousedown', () => {
        isKeyboardUser = false;
        document.body.classList.remove('keyboard-user');
    });
})();

// ===== FORM VALIDATION ENHANCEMENTS =====
(function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            // Real-time validation feedback
            input.addEventListener('blur', function () {
                if (this.validity.valid) {
                    this.classList.remove('invalid');
                    this.classList.add('valid');
                } else {
                    this.classList.remove('valid');
                    this.classList.add('invalid');
                }
            });

            // Clear validation on focus
            input.addEventListener('focus', function () {
                this.classList.remove('invalid', 'valid');
            });
        });
    });
})();

// ===== TOAST NOTIFICATION SYSTEM =====
window.showToast = function (message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast alert alert-${type}`;

    const icon = {
        success: '✓',
        error: '✗',
        warning: '⚠',
        info: 'ℹ'
    }[type] || 'ℹ';

    toast.innerHTML = `
        <div class="alert-icon">${icon}</div>
        <div class="alert-content">${message}</div>
    `;

    document.body.appendChild(toast);

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
(function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
})();

// ===== PRINT OPTIMIZATION =====
(function () {
    window.addEventListener('beforeprint', () => {
        console.log('Preparing page for printing...');
        // Could add custom print preparation logic here
    });

    window.addEventListener('afterprint', () => {
        console.log('Print completed or cancelled');
    });
})();

// ===== PAGE LOAD COMPLETE =====
window.addEventListener('load', () => {
    console.log('🎂 Sweet Dreams Bakery - Website Loaded Successfully!');
    console.log('🎨 SEO Optimized | Accessible | Performance Enhanced');

    // Log page load time
    if (window.performance) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd -
            window.performance.timing.navigationStart;
        console.log(`⚡ Page loaded in ${loadTime}ms`);
    }
});
