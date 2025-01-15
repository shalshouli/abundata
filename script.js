gsap.registerPlugin(ScrollTrigger);

// Logo animation intro
gsap.to(".logo", {
    opacity: 1,
    duration: 2,
    y: 0,
    scale: 1,
    ease: "power4.out",
    onComplete: () => {
        gsap.to(".logo", {
            scale: 0.2,
            y: -50,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(".navbar.logo-centered", { opacity: 1, display: "flex", ease: "power2.out" });
            }
        });
    }
});

// Article cards hover effect
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.1, duration: 0.3, ease: "elastic.out(1, 0.3)" });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
    });
    card.addEventListener("click", () => {
        gsap.to(".articles", { display: "none", duration: 0.5, ease: "power2.inOut" });
    });
});
