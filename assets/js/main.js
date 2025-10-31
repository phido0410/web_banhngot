// ===== SWEET DREAMS - MODERN JAVASCRIPT ===== //

document.addEventListener("DOMContentLoaded", function () {
  // ===== MOBILE HAMBURGER MENU ===== //
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      body.classList.toggle("menu-open");

      const isExpanded = hamburger.classList.contains("active");
      hamburger.setAttribute("aria-expanded", isExpanded);
    });

    // Close menu when clicking nav links (mobile)
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          body.classList.remove("menu-open");
          hamburger.setAttribute("aria-expanded", false);
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        window.innerWidth <= 768 &&
        !hamburger.contains(e.target) &&
        !navMenu.contains(e.target) &&
        navMenu.classList.contains("active")
      ) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("menu-open");
        hamburger.setAttribute("aria-expanded", false);
      }
    });

    // Handle window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("menu-open");
        hamburger.setAttribute("aria-expanded", false);
      }
    });
  }

  // ===== ACTIVE NAVIGATION HIGHLIGHT ===== //
  function setActiveNavLink() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");

      const linkHref = link.getAttribute("href");

      if (
        linkHref === currentPage ||
        (currentPage === "" && linkHref === "index.html") ||
        (currentPage === "/" && linkHref === "index.html")
      ) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  setActiveNavLink();

  // ===== HEADER SCROLL EFFECTS ===== //
  const header = document.querySelector(".header");
  let ticking = false;

  function updateHeaderOnScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateHeaderOnScroll);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick);

  // ===== SMOOTH SCROLLING ===== //
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = header ? header.offsetHeight : 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ===== LAZY LOADING IMAGES ===== //
  const lazyImages = document.querySelectorAll(".lazy");

  if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            img.classList.add("loaded");
            imageObserver.unobserve(img);
          }
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  }

  // ===== SCROLL ANIMATIONS ===== //
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".fade-in, .product-card, .blog-card"
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("animate");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run on load

  // ===== ACCESSIBILITY ENHANCEMENTS ===== //
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("menu-open");
      hamburger.setAttribute("aria-expanded", false);
      hamburger.focus();
    }
  });

  // Focus management
  if (hamburger) {
    hamburger.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        hamburger.click();
      }
    });
  }

  // ===== DROPDOWN MENU ===== //
  const dropdownItems = document.querySelectorAll(".nav-item.has-dropdown");

  dropdownItems.forEach((dropdown) => {
    const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    // Mobile: Click to toggle
    if (dropdownToggle) {
      dropdownToggle.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle("active");
          const isExpanded = dropdown.classList.contains("active");
          dropdownToggle.setAttribute("aria-expanded", isExpanded);
        }
      });
    }

    // Desktop: Hover to show
    if (window.innerWidth > 768) {
      dropdown.addEventListener("mouseenter", function () {
        dropdown.classList.add("active");
        dropdownToggle.setAttribute("aria-expanded", "true");
      });

      dropdown.addEventListener("mouseleave", function () {
        dropdown.classList.remove("active");
        dropdownToggle.setAttribute("aria-expanded", "false");
      });
    }

    // Keyboard navigation
    dropdownToggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dropdown.classList.toggle("active");
        const isExpanded = dropdown.classList.contains("active");
        dropdownToggle.setAttribute("aria-expanded", isExpanded);
      }
      if (e.key === "Escape") {
        dropdown.classList.remove("active");
        dropdownToggle.setAttribute("aria-expanded", "false");
        dropdownToggle.focus();
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  console.log("🧁 Sweet Dreams website loaded successfully!");
});
