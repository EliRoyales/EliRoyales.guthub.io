document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: -30, duration: 1, delay: 0.3 });
    gsap.from(".btn", { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.5 });

    const button = document.querySelector(".btn");

    button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.15, duration: 0.3, ease: "power1.out" });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power1.out" });
    });

    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            }
        });
    });
});
