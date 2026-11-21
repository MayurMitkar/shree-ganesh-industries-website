
// ======================================
// SHREE GANESH INDUSTRIES
// WEBSITE JAVASCRIPT
// ======================================

console.log("Shree Ganesh Industries website loaded successfully!");


// ======================================
// HERO BACKGROUND IMAGE SLIDESHOW
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    const hero = document.querySelector(".hero");

    if (!hero) {
        console.log("Hero section not found!");
        return;
    }

    // Only 3 background images
    const heroImages = [
        "assets/hero-transformer.jpg",
        "assets/2.jpg",
        "assets/3.jpg"
    ];

    let currentIndex = 0;

    // Preload images before displaying
    heroImages.forEach(function (src) {
        const image = new Image();
        image.src = src;
    });

    // Display first image
    hero.style.backgroundImage = `url("${heroImages[0]}")`;

    // Change background image
    function changeHeroImage() {

        currentIndex = (currentIndex + 1) % heroImages.length;

        const nextImage = new Image();

        nextImage.onload = function () {

            hero.style.backgroundImage =
                `url("${heroImages[currentIndex]}")`;

            console.log("Background changed:", heroImages[currentIndex]);

        };

        nextImage.onerror = function () {
            console.error("Image not found:", heroImages[currentIndex]);
        };

        nextImage.src = heroImages[currentIndex];
    }

    // Change image every 5 seconds
    setInterval(changeHeroImage, 5000);

});
let lastScrollTop = 0;

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Scrolling down: hide header
        header.classList.add("hide-header");
    } else {
        // Scrolling up: show header
        header.classList.remove("hide-header");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// Hamburger Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

}
