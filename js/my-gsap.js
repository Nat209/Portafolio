gsap.registerPlugin(ScrollTrigger);
const isMobile = window.innerWidth <= 768;

gsap.from(".hero-header-nav", .5, {
    delay: .75,
    y: -700,
    ease: "power4.inOut",
});

gsap.from(".hero-footer", .5, {
    delay: 1,
    y: 700,
    ease: "power4.inOut",
});

gsap.from(".hero-container-title", .5, {
    delay: 1.5,
    scale: 0,
    stagger: {
        amount: 0.25,
    },
    ease: "back.out",
});

gsap.from(".hero-header-logo", .5, {
    delay: 1.75,
    x: -700,
    ease: "power4.inOut",
})

gsap.from(".hero", 1, {
    delay: .75,
    margin: "0",
    minHeight: "100vh",
    borderRadius: "0",
    ease: "back.out",
})

gsap.from(".hero-video", .5, {
    delay: 2,
    scale: 0,
    ease: "back.out",
})

gsap.from(".menu-item", .5, {
    delay: 2,
    scaleX: 0,
    stagger: {
        amount: 0.25,
    },
    ease: "back.out",
});

gsap.from(".stat", .5, {
    delay: 2.25,
    scaleX: 0,
    transformOrigin: "left",
    stagger: {
        amount: 0.25,
    },
    ease: "back.out",
});

gsap.to(".hero-icon", .5, {
    delay: 2.5,
    transform: "scale(0)",
    width: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "back.out",
});




// HERO PARALLAX
const heroSection = document.querySelector(".hero");
if (heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
        if (typeof isMobile !== 'undefined' && isMobile) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(".hero-container-title", {
            x: x * 2,
            y: y * 2,
            duration: 1,
            ease: "power2.out"
        });

        gsap.to(".hero-video", {
            x: x * -1,
            y: y * -1,
            duration: 1,
            ease: "power2.out"
        });
    });
}

let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-1, 1); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
    onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
        }
    }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });


//// SECTION TITLE ANIMACION DE ENTRADA
const sectionTitles = document.querySelectorAll(".section-title");
sectionTitles.forEach((char, i) => {

    const text = new SplitType(char, {
        types: "chars, words",
        charClass: "title-letter"
    })

    gsap.set(text.chars, {
        fontWeight: 100,
        opacity: 0,
        translateX: 100,
    }); // Establecer valores iniciales

    gsap.to(text.chars, {
        opacity: 1,
        translateY: 0,
        translateX: 0,
        duration: 0.5,
        fontWeight: 900,
        stagger: .05,
        scrollTrigger: {
            trigger: char.parentNode.parentNode.parentNode,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: isMobile ? false : true,
        }
    });

    text.chars.forEach((letra) => {
        letra.addEventListener("mouseenter", () => {
            gsap.to(letra, {
                translateY: Math.floor(Math.random() * 101) - 110,
                rotateZ: Math.floor(Math.random() * 101) - 50,
                translateX: Math.floor(Math.random() * 61) - 30,
                duration: .5,
                ease: "expo.out",
            })
        })
        letra.addEventListener("mouseleave", () => {
            gsap.to(letra, {
                translateY: 0,
                rotateZ: 0,
                translateX: 0
            })
        })
    })

})


//// FOTO DE ABOUT ME
gsap.set(".about-me-picture", {
    opacity: 0,
    translateY: -200,
}); // Establecer valores iniciales

gsap.to(".about-me-picture", {
    opacity: 1,
    translateY: 0,
    scrollTrigger: {
        trigger: ".about-me-picture",
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: isMobile ? false : true,
    }
});


////// TEXTOS DE SECTIONS
const sectionTexts = document.querySelectorAll(".section-text");
sectionTexts.forEach((sectionText) => {

    gsap.from(sectionText, {
        opacity: 0,
        translateX: -600,
        duration: 0.5,
        ease: "expo.out",
        scrollTrigger: {
            trigger: sectionText.parentNode.parentNode.parentNode,
            start: 'top bottom',
            end: 'bottom 60%',
            scrub: isMobile ? false : true,
        }
    });

})




////// TITULO DEL FOOTER


const footerTitles = document.querySelectorAll(".footer-title");
footerTitles.forEach((char, i) => {

    const text = new SplitType(char, {
        types: "chars, words",
        charClass: "title-letter"
    })

    gsap.set(text.chars, {
        fontWeight: 100,
        opacity: 0,
        translateX: 100
    }); // Establecer valores iniciales

    gsap.to(text.chars, {
        opacity: 1,
        translateY: 0,
        translateX: 0,
        duration: 0.5,
        fontWeight: 900,
        stagger: .05,
        scrollTrigger: {
            trigger: char,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: false
        }
    });

    text.chars.forEach((letra) => {
        letra.addEventListener("mouseenter", () => {
            gsap.to(letra, {
                translateY: Math.floor(Math.random() * 101) - 110,
                rotateZ: Math.floor(Math.random() * 101) - 50,
                translateX: Math.floor(Math.random() * 61) - 30,
                duration: .5,
                ease: "expo.out",
            })
        })
        letra.addEventListener("mouseleave", () => {
            gsap.to(letra, {
                translateY: 0,
                rotateZ: 0,
                translateX: 0
            })
        })
    })

})


/// ICONOS REDES
gsap.from(".footer-redes > a", {
    opacity: 0,
    translateX: -100,
    duration: 0.5,
    stagger: .05,
    scrollTrigger: {
        trigger: "#footer",
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: false
    }
});




////TITULOS HERO
const heroTitles = document.querySelectorAll(".hero-container-title");
heroTitles.forEach((char, i) => {

    const text = new SplitType(char, {
        types: "chars, words",
        charClass: "title-letter"
    })

    text.chars.forEach((letra) => {
        letra.addEventListener("mouseenter", () => {
            gsap.to(letra, {
                translateY: Math.floor(Math.random() * 101) - 110,
                rotateZ: Math.floor(Math.random() * 101) - 50,
                translateX: Math.floor(Math.random() * 61) - 30,
                duration: .5,
                ease: "expo.out",
            })
        })
        letra.addEventListener("mouseleave", () => {
            gsap.to(letra, {
                translateY: 0,
                rotateZ: 0,
                translateX: 0
            })
        })
    })

})







const allSections = document.querySelectorAll(".section");

allSections.forEach((section) => {
    gsap.set(section, { backgroundColor: "#ffffff" })

    let bgColor;
    if (section.id === "about-me") {
        bgColor = "#b2f344";
    } else if (section.id === "proyectos") {
        bgColor = "#1c1c1c";
    } else if (section.id === "contacto") {
        bgColor = "#5865F2";
    } else {
        bgColor = "#ffffff";
    }

    gsap.to(section, {
        backgroundColor: bgColor,
        scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'bottom 75%',
            scrub: true,
        }
    });
})
















gsap.to(".hero-header", {
    scrollTrigger: {
        trigger: ".hero",
        start: 'bottom top',
        end: "bottom top",
        onEnter: () => {
            document.querySelector(".hero-header").classList.add("fixed");
            document.querySelector(".hero").classList.add("header-fixed");
        },
        onEnterBack: () => {
            document.querySelector(".hero-header").classList.remove("fixed");
            document.querySelector(".hero").classList.remove("header-fixed");
        },
    }
});


// --- RESUME / CV ANIMATIONS ---

// 1. Fade in main Resume Container
gsap.from(".doc", {
    scrollTrigger: {
        trigger: ".doc",
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse",
        scrub: false
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// 2. Animate Experience Items
const experienceItems = document.querySelectorAll(".doc article");
experienceItems.forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// 3. Animate Skills (staggered)
// Assuming skills are in paragraph inside section with h2 "Habilidades" or similar structure.
// Based on HTML: <p data-i18n="cv.skills.tech">...
const skillSections = document.querySelectorAll(".doc section p");
skillSections.forEach((p) => {
    gsap.from(p, {
        scrollTrigger: {
            trigger: p,
            start: "top 95%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    })
});

// --- PROJECTS ANIMATIONS ---
const projects = document.querySelectorAll(".project-card");

if (projects.length > 0) {
    // 1. Staggered Entry
    gsap.from(projects, {
        scrollTrigger: {
            trigger: ".proyectos-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    // 2. 3D Tilt Effect on Hover
    projects.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            if (isMobile) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
            const rotateY = ((x - centerX) / centerX) * 5;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000,
                duration: 0.4,
                ease: "power2.out"
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });
}
