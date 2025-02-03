gsap.registerPlugin(ScrollTrigger);

// Bouton mode sombre

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggle-mode");
  const body = document.body;

  // Vérifie si l'utilisateur a déjà un mode préféré
  if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", function() {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
          toggleButton.textContent = "☀️";
          localStorage.setItem("theme", "dark");
      } else {
          toggleButton.textContent = "🌙";
          localStorage.setItem("theme", "light");
      }
  });
});


// Filigrane de fond

gsap.to(".background-image", {
  y: () => window.innerHeight * 0.5, // Fait descendre l'image à la vitesse du scroll
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true, // Suit la vitesse du scroll en douceur
  }
});

//Carrousel
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 700;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// Contrôle du son
const soundButton = document.getElementById("toggle-sound");
const video = document.getElementById("intro-video");

// Initialement, le son est activé
video.muted = false;
soundButton.textContent = "🔊"; // Le bouton affiche "🔊" pour un son activé

soundButton.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;  // Désactive le mute
    soundButton.textContent = "🔊"; // Affiche l'icône pour son activé
  } else {
    video.muted = true;  // Active le mute
    soundButton.textContent = "🔇"; // Affiche l'icône pour son coupé
  }
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