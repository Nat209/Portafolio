const follower = document.querySelector('.ball-cursor');

document.addEventListener("mousemove", (e) => {
    gsap.to(follower, {
        duration: 0.8,
        x: e.clientX,
        y: e.clientY,
        ease: "power4.out",
    });
});

// Hover effect for links and buttons
const clickableElements = document.querySelectorAll("a, button, .clickable, .select");

clickableElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        gsap.to(follower, {
            scale: 2.5,
            backgroundColor: "rgba(31,103,255, 0.1)", // Semi-transparent blue
            border: "1px solid rgba(31,103,255, 0.5)",
            duration: 0.3,
            ease: "power2.out"
        });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(follower, {
            scale: 1,
            backgroundColor: "#1f67ff", // Original color (assuming primary blue)
            border: "none", // Reset border
            duration: 0.3,
            ease: "power2.out"
        });
    });
});