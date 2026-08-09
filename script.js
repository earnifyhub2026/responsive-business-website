const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});


// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("active");
  });
});


// Contact Form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    formMessage.textContent =
      "Thank you! Your message has been received.";
    
    contactForm.reset();
  });
}