const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Animation on scroll
const features = document.querySelectorAll(".feature");

window.addEventListener("scroll", () => {
    features.forEach(feature => {
        const rect = feature.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            feature.style.opacity = "1";
            feature.style.transform = "translateY(0)";
        }
    });
});
