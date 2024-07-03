/*========== handle nav in small screen ==========*/

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
};

/*========== handle active section link ==========*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6, // Adjust this value as needed
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const navLink = document.querySelector(
      `header nav a[href="#${entry.target.id}"]`,
    );
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLink.classList.add("active");
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

/*========== scroll to top ==========*/
const scrollBtn = document.getElementById("scroll-icon");

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*========== scroll to top ==========*/
ScrollReveal({
  distance: "80px",
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .home .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .projects-container, .project, .contact form",
  { origin: "bottom" },
);
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });
