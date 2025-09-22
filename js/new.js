// Image Modal Functionality
const quickViewBtns = document.querySelectorAll(".quick-view");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".modal-close");
const prevBtn = document.querySelector(".modal-prev");
const nextBtn = document.querySelector(".modal-next");
const thumbnailsContainer = document.getElementById("modal-thumbnails");

let currentImages = [];
let currentIndex = 0;

quickViewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const productCard = btn.closest(".product-card");
        currentImages = Array.from(productCard.querySelectorAll(".product-img")).map(img => img.src);
        currentIndex = 0;
        showImage(currentIndex);
        modal.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

document.querySelector(".modal-overlay").addEventListener("click", () => {
    modal.classList.remove("active");
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    showImage(currentIndex);
});

function showImage(index) {
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

// Main DOM Content Loaded Functionality
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

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

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

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');

        // Reset animation
        const menuItems = document.querySelectorAll('.stagger-animation');
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    });

    mobileMenuOverlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');

        // Reset animation
        const menuItems = document.querySelectorAll('.stagger-animation');
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    });

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
            this.parentElement.style.transform = 'scale(0.8)';
            this.parentElement.style.opacity = '0';
            setTimeout(() => {
                this.parentElement.remove();
            }, 300);
        });
    });

    // Apply button animation
    const applyBtn = document.querySelector('.apply-btn');
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

    // Mobile filter button
    const mobileFilterBtn = document.querySelector('.mobile-filter-btn');
    const filterSidebar = document.querySelector('.filter-sidebar');

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
});
