const overlay = document.querySelector(".overlay");
const sideBar = document.querySelector(".small-screen");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const html = document.documentElement;

openMenu.addEventListener("click", () => {
    html.classList.add("noScroll");
    sideBar.classList.add("visible")
})

closeMenu.addEventListener("click", () =>{
    html.classList.remove("noScroll");
    sideBar.classList.remove("visible");
})

