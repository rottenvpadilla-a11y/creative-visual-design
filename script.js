const toggleMenu = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", ()  =>{
    console.log("clicked");
    toggleMenu.classList.toggle("open");
    headernav.classList.toggle("open");
});
