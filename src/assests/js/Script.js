function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.navbar-menu');

  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar-menu');

    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.navbar-menu');
  const navbar = document.querySelector('.new-navbar');

  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

document.querySelectorAll(".btn-proj").forEach(btn => {
  btn.addEventListener("click", function () {
    const videoSrc = this.getAttribute("data-video-src");
    const imageSrc = this.getAttribute("data-image-src");

    if (videoSrc) {
      const videoModal = document.getElementById("videoModal");
      const video = document.getElementById("videoPlayer");
      const source = video.querySelector("source");

      source.src = videoSrc;
      video.load();
      video.play();
      videoModal.style.display = "flex";
    }

    if (imageSrc) {
      const imageModal = document.getElementById("imageModal");
      const imageViewer = document.getElementById("imageViewer");

      imageViewer.src = imageSrc;
      imageModal.style.display = "flex";
    }
  });
});

document.getElementById("closeModal").addEventListener("click", function () {
  const videoModal = document.getElementById("videoModal");
  const video = document.getElementById("videoPlayer");

  video.pause();
  video.currentTime = 0;
  videoModal.style.display = "none";
});

document.getElementById("closeImageModal").addEventListener("click", function () {
  const imageModal = document.getElementById("imageModal");
  const imageViewer = document.getElementById("imageViewer");

  imageViewer.src = "";
  imageModal.style.display = "none";
});
document.getElementById("closeModal").addEventListener("click", function () {
  const videoModal = document.getElementById("videoModal");
  const video = document.getElementById("videoPlayer");

  video.pause();
  video.currentTime = 0;
  videoModal.style.display = "none";
});

const disabledKeys = ["x", "s", "J", "u", "I"];
const Alert = e => {
  e.preventDefault();
};

document.addEventListener("contextmenu", e => {
  if (!e.target.closest("Contact")) {
    Alert(e);
  }
});

document.addEventListener("keydown", e => {
  if (
    (e.ctrlKey && disabledKeys.includes(e.key)) ||
    (e.metaKey && disabledKeys.includes(e.key)) ||
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I")
  ) {
  }
});

document.addEventListener("contextmenu", e => {
  if (e.target.closest("Contact")) {
    return;
  }

  if (e.ctrlKey || e.shiftKey) {
    Alert(e);
  }

});

function goToPage(page) {
  window.location.href = page;
}



