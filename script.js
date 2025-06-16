let sections = document.querySelectorAll('section');
let NavLinks = document.querySelectorAll('header nav a');
let lastScrollTop = 0;

window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    
    let navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    } else {
        console.warn('No nav links found.');
    }

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight ;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            NavLinks.forEach(links => {
                links.classList.remove('Active');
                document.querySelector('header nav a[href*='+id+']').classList.add('Active');
            });
            sec.classList.add('show-animated');

        }
        else{
            sec.classList.remove('show-animated');
        }
    });

    

 
    if (window.scrollY === 0) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('header nav a[href*="Home"]').classList.add('active');
    }
};


let contactBtn = document.querySelector('.btn-primary');

if (contactBtn) {
    contactBtn.addEventListener('click', function (e) {
        e.preventDefault(); 
        let contactSection = document.querySelector('#contact');

        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            

          
            contactBtn.classList.add('active');

           
            contactSection.classList.add('show-animated');
        }
    });
}


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "0"; 
    } else {
        navbar.style.top = "0"; 
    }

    lastScrollTop = scrollTop;
});


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav_links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
} 


  
  function fadeNavigate(event, element) {
    event.preventDefault(); 
    document.body.classList.add("fade-out");
    const url = element.getAttribute("href");
    setTimeout(() => {
      window.location.href = url;
    }, 500); 
  }

    
    function goToPage(url) {
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = url;
        }, 500);
      }


      function openLightbox(src) {
        document.getElementById("lightbox-img").src = src;
        document.getElementById("lightbox").style.display = "flex";
       
      }
    
      function closeLightbox() {
        document.getElementById("lightbox").style.display = "none";
      }

// -------
 document.addEventListener("DOMContentLoaded", function () {
    const offset = document.querySelector('.navbar').offsetHeight;
    const links = document.querySelectorAll('.nav-link[href^="#"]');

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          const elementPosition = target.offsetTop;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });

          if (window.innerWidth <= 1000) {
            const navbarCollapse = document.getElementById("navbarNav");
            const collapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (collapse) collapse.hide();
          }
        }
      });
    });
  });

// -------
  const disabledKeys = ["x","s","J", "u", "I"]; 
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
      e.preventDefault(); 
    }
  });

function goToPage(pageName) {
    window.location.href = pageName + ".html";
}


