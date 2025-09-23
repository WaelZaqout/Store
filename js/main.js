// Add JavaScript functionality for interactivity
document.addEventListener('DOMContentLoaded', function () {
    // View options toggle
    const viewOptions = document.querySelectorAll('.view-option');
    viewOptions.forEach(option => {
        option.addEventListener('click', function () {
            viewOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Remove filter tags
    const removeFilters = document.querySelectorAll('.remove-filter');
    removeFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            this.parentElement.remove();
        });
    });

    // Apply button for price range
    const applyBtn = document.querySelector('.apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', function () {
            alert('Filters applied!');
        });
    }

    // Show more designers
    const showMore = document.querySelector('.show-more');
    if (showMore) {
        showMore.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Showing more designers...');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Loading screen hide after animation
    setTimeout(function () {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 3000); // Match the loading bar animation duration

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuItems = document.querySelectorAll('.stagger-animation');

    function openMobileMenu() {
        if (mobileMenu && mobileMenuOverlay) {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Animate menu items
            setTimeout(() => {
                mobileMenuItems.forEach((item, index) => {
                    if (item) {
                        item.style.animationDelay = `${index * 0.05}s`;
                        item.style.animation = 'staggerFade 0.4s ease forwards';
                    }
                });
            }, 100);
        }
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMobileMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Scroll animations
    function checkScroll() {
        const elements = document.querySelectorAll('.slide-up, .product-card');
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    }

    // Initialize animations on load
    setTimeout(() => {
        const slideUpElements = document.querySelectorAll('.slide-up');
        slideUpElements.forEach((element, index) => {
            const delay = element.classList.contains('delay-100') ? 0.1 :
                element.classList.contains('delay-200') ? 0.2 :
                    element.classList.contains('delay-300') ? 0.3 :
                        element.classList.contains('delay-400') ? 0.4 :
                            element.classList.contains('delay-500') ? 0.5 :
                                element.classList.contains('delay-600') ? 0.6 :
                                    element.classList.contains('delay-700') ? 0.7 :
                                        element.classList.contains('delay-800') ? 0.8 :
                                            element.classList.contains('delay-900') ? 0.9 :
                                                element.classList.contains('delay-1000') ? 1.0 :
                                                    element.classList.contains('delay-1100') ? 1.1 :
                                                        element.classList.contains('delay-1200') ? 1.2 : 0;

            setTimeout(() => {
                element.classList.add('visible');
            }, delay * 1000);
        });
    }, 300);

    // Product card animations
    setTimeout(() => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, 500 + (index % 5) * 100);
        });
    }, 500);

    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load

    // Wishlist functionality
    const heartButtons = document.querySelectorAll('.wishlist-button');
    heartButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = 'var(--secondary)';
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });
    });

    // Carousel functionality
    const prevBtn = document.querySelector('.carousel-nav.prev');
    const nextBtn = document.querySelector('.carousel-nav.next');
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');

    if (prevBtn && nextBtn && carouselItems.length > 0) {
        let currentIndex = 0;
        const itemWidth = carouselItems[0].offsetWidth + 32; // 32px for gap

        prevBtn.addEventListener('click', () => {
            currentIndex = Math.max(0, currentIndex - 1);
            carouselTrack.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = Math.min(carouselItems.length - 1, currentIndex + 1);
            carouselTrack.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        });
    }

    // Country selector for desktop
    const desktopCountry = document.querySelector('.desktop-country');
    if (window.innerWidth >= 768 && desktopCountry) {
        desktopCountry.style.display = 'block';
    }

    // Language selector for desktop
    const desktopLang = document.querySelector('.desktop-lang');
    if (window.innerWidth >= 768 && desktopLang) {
        desktopLang.style.display = 'block';
    }

    // Responsive adjustments
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            if (desktopCountry) desktopCountry.style.display = 'block';
            if (desktopLang) desktopLang.style.display = 'block';
        } else {
            if (desktopCountry) desktopCountry.style.display = 'none';
            if (desktopLang) desktopLang.style.display = 'none';
        }
    });

    // Add floating animation to the "JOIN OR LOG IN" button
    const joinButton = document.querySelector('.cta-button.float');
    if (joinButton) {
        joinButton.style.animation = 'float 3s ease-in-out infinite';
    }

    // Add pulse animation to the hero CTA button
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.style.animation = 'pulse 2s ease-in-out infinite';
    }

    // Add hover effect to category cards
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.style.transition = 'all 0.3s ease';
        item.style.cursor = 'pointer';
    });

    // Add hover effect to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
        card.style.cursor = 'pointer';
    });

    // Add hover effect to highlight items
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems.forEach(item => {
        item.style.transition = 'all 0.3s ease';
        item.style.cursor = 'pointer';
    });

    // Add hover effect to sneakers
    const sneakerCards = document.querySelectorAll('.sneaker-card');
    sneakerCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
        card.style.cursor = 'pointer';
    });

    // Add hover effect to the hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transition = 'transform 0.5s ease';
        heroImage.style.cursor = 'pointer';
    }

    // Add hover effect to the film image
    const filmImage = document.querySelector('.film-image');
    if (filmImage) {
        filmImage.style.transition = 'transform 0.5s ease';
        filmImage.style.cursor = 'pointer';
    }

    // Add hover effect to the brand image
    const brandImage = document.querySelector('.brand-image');
    if (brandImage) {
        brandImage.style.transition = 'transform 0.5s ease';
        brandImage.style.cursor = 'pointer';
    }

    // Add hover effect to the newsletter button
    const newsletterButton = document.querySelector('.newsletter-button');
    if (newsletterButton) {
        newsletterButton.style.transition = 'all 0.3s ease';
        newsletterButton.style.cursor = 'pointer';
    }

    // Add hover effect to the social media icons
    const socialIcons = document.querySelectorAll('.social-links a');
    socialIcons.forEach(icon => {
        icon.style.transition = 'all 0.3s ease';
        icon.style.cursor = 'pointer';
    });

    // Add hover effect to the footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.style.transition = 'all 0.3s ease';
        link.style.cursor = 'pointer';
    });

    // Add hover effect to the app store buttons
    const appStoreButtons = document.querySelectorAll('.app-store');
    appStoreButtons.forEach(button => {
        button.style.transition = 'all 0.3s ease';
        button.style.cursor = 'pointer';
    });

    // Add hover effect to dropdown menus
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
                dropdown.style.transform = 'translateY(0)';
            }
        });

        item.addEventListener('mouseleave', function () {
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(-10px)';
            }
        });
    });

    // Image Modal functionality
    const modal = document.querySelector('.image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const quickViews = document.querySelectorAll('.quick-view');

    function openModal(imageSrc) {
        console.log('openModal called with imageSrc:', imageSrc);
        modalImage.src = imageSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        console.log('closeModal called');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    quickViews.forEach(quickView => {
        quickView.addEventListener('click', function (e) {
            console.log('quickView clicked');
            e.preventDefault();
            e.stopPropagation();
            const productCard = this.closest('.product-card');
            const productImage = productCard.querySelector('.product-image');
            if (productImage) {
                openModal(productImage.src);
            }
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

const buttons = document.querySelectorAll('.view-switcher button');
const productGrid = document.querySelector('.product-grid');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cols = btn.getAttribute('data-cols');
        if (productGrid) {
            productGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        }
    });
});

// Merged code from new.js - Image Modal Functionality
const quickViewBtns = document.querySelectorAll(".quick-view");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".modal-close");
const prevBtn = document.querySelector(".modal-prev");
const nextBtn = document.querySelector(".modal-next");
const thumbnailsContainer = document.getElementById("modal-thumbnails");

let currentImages = [];
let currentIndex = 0;

if (modal && modalImg) {
    quickViewBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const productCard = btn.closest(".product-card");
            if (productCard) {
                currentImages = Array.from(productCard.querySelectorAll(".product-img")).map(img => img.src);
                currentIndex = 0;
                showImage(currentIndex);
                modal.classList.add("active");
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }

    const modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
        modalOverlay.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            showImage(currentIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % currentImages.length;
            showImage(currentIndex);
        });
    }

    function showImage(index) {
        if (modalImg && thumbnailsContainer) {
            modalImg.src = currentImages[index];
            thumbnailsContainer.innerHTML = "";
            currentImages.forEach((src, i) => {
                const thumb = document.createElement("img");
                thumb.src = src;
                if (i === index) thumb.classList.add("active");
                thumb.addEventListener("click", () => {
                    currentIndex = i;
                    showImage(currentIndex);
                });
                thumbnailsContainer.appendChild(thumb);
            });
        }
    }
}

// Additional functionality from new.js
document.addEventListener('DOMContentLoaded', function () {
    // Loading screen animation
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingBar = document.querySelector('.loading-bar');

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 500);
        } else {
            width += 2;
            loadingBar.style.width = width + '%';
        }
    }, 50);

    // Mobile menu toggle (enhanced)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    if (mobileMenuToggle && mobileMenu && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');

            // Animate menu items
            const menuItems = document.querySelectorAll('.stagger-animation');
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('active');
                }, index * 50);
            });
        });
    }

    if (mobileMenuClose && mobileMenu && mobileMenuOverlay) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');

            // Reset animation
            const menuItems = document.querySelectorAll('.stagger-animation');
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        });
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');

            // Reset animation
            const menuItems = document.querySelectorAll('.stagger-animation');
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    // Favorite button toggle
    const favoriteButtons = document.querySelectorAll('.product-favorite');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.toggle('liked');
            if (this.classList.contains('liked')) {
                this.innerHTML = '<i class="fas fa-heart"></i>';
            } else {
                this.innerHTML = '<i class="far fa-heart"></i>';
            }
        });
    });

    // Color dot selection
    const colorDots = document.querySelectorAll('.color-dot');
    colorDots.forEach(dot => {
        dot.addEventListener('click', function () {
            // Remove active class from siblings
            const siblings = this.parentElement.querySelectorAll('.color-dot');
            siblings.forEach(sibling => {
                sibling.classList.remove('active');
            });
            // Add active class to clicked dot
            this.classList.add('active');
        });
    });

    // Apply button animation
    const applyBtn = document.querySelector('.apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', function () {
            this.innerHTML = 'APPLYING...';
            this.style.transform = 'translateY(2px)';

            setTimeout(() => {
                this.innerHTML = 'APPLIED!';
                this.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';

                setTimeout(() => {
                    this.innerHTML = 'APPLY';
                    this.style.background = 'linear-gradient(135deg, var(--primary), #e0a88a)';
                    this.style.transform = 'translateY(0)';
                }, 1500);
            }, 800);
        });
    }

    // Product card hover effect enhancement
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const image = card.querySelector('.product-img');
            const imageAlt = card.querySelector('.product-img-alt');

            image.style.opacity = '0';
            imageAlt.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            const image = card.querySelector('.product-image');
            const imageAlt = card.querySelector('.product-image-alt');
            image.style.opacity = '1';
            imageAlt.style.opacity = '0';
        });
    });

    // Filter section collapse/expand
    const filterTitles = document.querySelectorAll('.filter-title');
    filterTitles.forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.collapse-icon');

            content.classList.toggle('collapsed');
            icon.classList.toggle('collapsed');

            if (content.classList.contains('collapsed')) {
                content.style.maxHeight = '0';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Clear all filters
    const clearFiltersBtn = document.querySelector('.clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function () {
            // Reset all checkboxes
            const checkboxes = document.querySelectorAll('.filter-checkbox input');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });

            // Show success message
            this.innerHTML = 'CLEARED!';
            this.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';

            setTimeout(() => {
                this.innerHTML = 'CLEAR ALL FILTERS';
                this.style.background = 'var(--white)';
                this.style.color = 'var(--primary)';
            }, 1500);
        });
    }

    // Mobile filter button
    const mobileFilterBtn = document.querySelector('.mobile-filter-btn');
    const filterSidebar = document.querySelector('.filter-sidebar');

    if (mobileFilterBtn && filterSidebar && mobileMenuOverlay) {
        mobileFilterBtn.addEventListener('click', function () {
            filterSidebar.classList.add('active');
            mobileMenuOverlay.classList.add('active');
        });

        mobileMenuOverlay.addEventListener('click', function () {
            if (filterSidebar.classList.contains('active')) {
                filterSidebar.classList.remove('active');
                this.classList.remove('active');
            }
        });
    }
});
