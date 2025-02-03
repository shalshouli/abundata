document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-mode");
  const body = document.body;

  // Vérifie si l'utilisateur a déjà un mode préféré
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleButton.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleButton.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

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

  // --- Introduction vidéo ---
  const introContainer = document.getElementById("intro-video-container");
  const mainContent = document.getElementById("main-content");

  video.addEventListener("ended", () => {
    introContainer.style.display = "none";
    mainContent.style.display = "block";
    document.body.style.overflow = "auto";
  });
});

// Ajout d'un événement click sur chaque miniature pour naviguer vers l'image correspondante
document.querySelectorAll('.carousel .thumbnail .item').forEach((item) => {
  item.addEventListener('click', function() {
    // Récupère la liste actuelle des miniatures
    let thumbnails = document.querySelectorAll('.carousel .thumbnail .item');
    // Détermine l'index de la miniature cliquée
    let clickedIndex = Array.from(thumbnails).indexOf(item);
    
    // Si la miniature cliquée est déjà la première (image affichée), on ne fait rien
    if (clickedIndex === 0) return;
    
    // Appelle showSlider('next') autant de fois que nécessaire pour amener la miniature cliquée en première position
    for(let i = 0; i < clickedIndex; i++){
      showSlider('next');
    }
  });
});
