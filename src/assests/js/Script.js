 function toggleMenu() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.navbar-menu');
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        }

        // Close menu when clicking on a link (mobile)
        document.querySelectorAll('.navbar-link').forEach(link => {
            link.addEventListener('click', () => {
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.navbar-menu');
                
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside (mobile)
        document.addEventListener('click', (e) => {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.navbar-menu');
            const navbar = document.querySelector('.new-navbar');
            
            if (!navbar.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        // -------------------------------------------------------- 

  document.querySelectorAll(".btn-proj").forEach(btn => {
  btn.addEventListener("click", function() {
    const videoSrc = this.getAttribute("data-video-src");
    const imageSrc = this.getAttribute("data-image-src");

    // Open video if data-video-src exists
    if (videoSrc) {
      const videoModal = document.getElementById("videoModal");
      const video = document.getElementById("videoPlayer");
      const source = video.querySelector("source");

      source.src = videoSrc;
      video.load();
      video.play();
      videoModal.style.display = "flex";
    }

    // Open image if data-image-src exists
    if (imageSrc) {
      const imageModal = document.getElementById("imageModal");
      const imageViewer = document.getElementById("imageViewer");

      imageViewer.src = imageSrc;
      imageModal.style.display = "flex";
    }
  });
});

// Close Video Modal
document.getElementById("closeModal").addEventListener("click", function() {
  const videoModal = document.getElementById("videoModal");
  const video = document.getElementById("videoPlayer");

  video.pause();
  video.currentTime = 0;
  videoModal.style.display = "none";
});

// Close Image Modal
document.getElementById("closeImageModal").addEventListener("click", function() {
  const imageModal = document.getElementById("imageModal");
  const imageViewer = document.getElementById("imageViewer");

  imageViewer.src = ""; // clear image
  imageModal.style.display = "none";
});
document.getElementById("closeModal").addEventListener("click", function() {
  const videoModal = document.getElementById("videoModal");
  const video = document.getElementById("videoPlayer");
  
  video.pause();
  video.currentTime = 0;
  videoModal.style.display = "none";
});

// ---------warning---------- 
  const disabledKeys = ["x", "s", "J", "u", "I"]; // Removed "c" to allow copy
  const Alert = e => {
    e.preventDefault(); // Prevents default action
  };

  // Disable right-click except in the #contact section
  document.addEventListener("contextmenu", e => {
    if (!e.target.closest("Contact")) {
      Alert(e);
    }
  });

  // Disable specific key combinations
  document.addEventListener("keydown", e => {
    if (
      (e.ctrlKey && disabledKeys.includes(e.key)) || // Ctrl + key
      (e.metaKey && disabledKeys.includes(e.key)) || // Cmd + key (Mac)
      e.key === "F12" ||                              // F12 (DevTools)
      (e.ctrlKey && e.shiftKey && e.key === "I")      // Ctrl+Shift+I (DevTools)
    ) {
    }
  });
  
document.addEventListener("contextmenu", e => {
  // Allow normal right-click actions (copy, save image, etc.)
  // But block when user tries to inspect element
  if (e.target.closest("Contact")) {
    return; // allow in Contact section
  }

  // Trick: detect right-click with Ctrl/Shift (used for Inspect in some browsers)
  if (e.ctrlKey || e.shiftKey) {
    Alert(e);
  }

});

function goToPage(page) {
    window.location.href = page; // Redirects to the given page
  }

