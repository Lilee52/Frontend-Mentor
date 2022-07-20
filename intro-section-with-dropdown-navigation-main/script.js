const dropdowns = document.querySelectorAll(".dropdown");
const navbar = document.querySelector(".nav");
const main = document.querySelector(".main-container")
const sidebar = document.querySelector(".sidebar");
const navbar2 = document.querySelector(".navbar-2");


dropdowns.forEach(dropdown => {
    const toogleNav = dropdown.querySelector(".toggle");
    const arrow = dropdown.querySelector(".nav-icon");
    const subnav = dropdown.querySelector(".sub-nav");

    toogleNav.addEventListener("click", () => {
        arrow.classList.toggle("nav-icon-rotate");
        subnav.classList.toggle("sub-nav-open");
    });

});

const barCont = document.querySelector(".barr");
barCont.addEventListener("click", () => {
    console.log(sidebar.classList);
    sidebar.classList.toggle("sidebar-active");
    navbar2.classList.toggle("navbar-2-active");
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

});

const closee = document.querySelector(".close");
closee.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-active");
    navbar2.classList.remove("navbar-2-active");
    document.body.style.backgroundColor = null;
});


const links = document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-active");
}))



// function rotate(e) {
//     document.querySelector(".nav-icon");
// }






