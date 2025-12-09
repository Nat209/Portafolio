const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector(".hero-header");
const hero = document.querySelector(".hero");

openMenu.addEventListener("click", () => {
    hero.classList.add("menu-active");
    menu.classList.add("menu-active");
    closeMenu.classList.add("active");

    // Animate menu items in
    gsap.fromTo(".menu-item",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power2.out" }
    );
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("menu-active");
    hero.classList.remove("menu-active");
    closeMenu.classList.remove("active");
})