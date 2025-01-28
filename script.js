gsap.registerPlugin(ScrollTrigger);


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

// Introduction vidéo
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("intro-video");
    const introContainer = document.getElementById("intro-video-container");
    const mainContent = document.getElementById("main-content");
  
    // Événement lorsque la vidéo se termine
    video.addEventListener("ended", () => {
      introContainer.style.display = "none"; // Cache la vidéo d'intro
      mainContent.style.display = "block";  // Affiche le contenu principal
      document.body.style.overflow = "auto"; // Réactive le scrolling
    });
});

  document.addEventListener('scroll', function() {
    const introVideoSection = document.getElementById('intro-video-section');
    if (window.scrollY > introVideoSection.offsetHeight) {
      introVideoSection.style.opacity = 0;
      introVideoSection.style.pointerEvents = 'none'; // Désactive la vidéo pour éviter qu'elle bloque le contenu
    }
  });

  document.querySelector('.scroll-indicator').addEventListener('click', () => {
    const mainContent = document.getElementById('main-content');
    mainContent.scrollIntoView({ behavior: 'smooth' });
  });