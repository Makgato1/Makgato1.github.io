// ✅ Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ✅ Fade-in + Slide-up Animation on Scroll
const sections = document.querySelectorAll("section, .project-card");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate only once
        }
    });
}, { threshold: 0.2 });

// Observe each section & card
sections.forEach(section => {
    observer.observe(section);
});
