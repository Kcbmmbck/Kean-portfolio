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

    // Check scroll position and add/remove active class dynamically
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

    

    // Handle Home section active class when scrolling to top
    if (window.scrollY === 0) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('header nav a[href*="Home"]').classList.add('active');
    }
};

// Add smooth scroll for Contact button and add active class when clicked
let contactBtn = document.querySelector('.btn-primary');

if (contactBtn) {
    contactBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        let contactSection = document.querySelector('#contact');

        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            

            // Add active class to Contact button
            contactBtn.classList.add('active');

            // Add animation to Contact section
            contactSection.classList.add('show-animated');
        }
    });
}


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "0"; // Hide navbar when scrolling down
    } else {
        navbar.style.top = "0"; // Show navbar when scrolling up
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


  // Fade-out effect before navigating
  function fadeNavigate(event, element) {
    event.preventDefault(); // Stop the default navigation
    document.body.classList.add("fade-out");
    const url = element.getAttribute("href");
    setTimeout(() => {
      window.location.href = url;
    }, 500); // Match the fade-out duration
  }

    // Fade-out effect before navigating
    function goToPage(url) {
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = url;
        }, 500); // Match animation duration (0.5s)
      }
      
      const form = document.getElementById("contact-form");
      const thankYouBox = document.getElementById("thankYouMessage");
    
      form.addEventListener("submit", function (event) {
        event.preventDefault();
      
        const fields = [
          { id: "firstName", name: "First Name" },
          { id: "lastName", name: "Last Name" },
          { id: "email", name: "Email" },
          { id: "phone", name: "Phone Number" },
          { id: "message", name: "Message" },
        ];
      
        let allFilled = true;
      
        fields.forEach(field => {
          const input = document.getElementById(field.id);
          const errorSpan = document.getElementById("error-" + field.id);
      
          if (input.value.trim() === "") {
            input.classList.add("error-border");
            errorSpan.textContent = "⚠️ This field is required.";
            errorSpan.style.display = "block";
            allFilled = false;
          } else {
            input.classList.remove("error-border");
            errorSpan.textContent = "";
            errorSpan.style.display = "none";
          }
        });
      
       // Optional: if all fields filled, show thank you
        if (allFilled) {
          const firstName = document.getElementById("firstName").value.trim();
          thankYouBox.textContent = `✅ Thank you, ${firstName}! Your message was received.`;
          thankYouBox.style.display = "block";
        } else {
          thankYouBox.style.display = "none";
        }
      });
    
      function resetForm() {
        const form = document.getElementById("contact-form");
        form.reset(); // clears inputs
      
        const errorMessages = document.querySelectorAll(".field-error");
        const inputs = document.querySelectorAll(".input, .textinput");
      
        errorMessages.forEach(span => {
          span.textContent = "";
          span.style.display = "none";
        });
      
        inputs.forEach(input => {
          input.classList.remove("error-border");
        });
        thankYouBox.style.display = "none";
        thankYouBox.textContent = ""; // optional: clear the message
      }

      function openLightbox(src) {
        document.getElementById("lightbox-img").src = src;
        document.getElementById("lightbox").style.display = "flex";
       
      }
    
      function closeLightbox() {
        document.getElementById("lightbox").style.display = "none";
      }

  // loading page 
      function goToPage(page) {
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('.animate_logo').style.display = 'None';
    
        setTimeout(() => {
          window.location.href = page;
        }, 5000); // 5 seconds delay
      }
      
