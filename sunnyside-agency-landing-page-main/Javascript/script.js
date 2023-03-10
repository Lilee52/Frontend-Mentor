const dropdown = document.querySelector(".nav-link-contain");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", () => {
    dropdown.classList.toggle("nav-open");
});