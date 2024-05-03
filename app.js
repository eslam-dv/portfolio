let navbar = document.querySelector("nav");
let menubtn = document.querySelector(".menu");

menubtn.addEventListener("click", function () {
  navbar.classList.toggle("open");
});
