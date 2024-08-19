const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav_links");
const menuBtnicon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnicon.setAttribute("class",isOpen ?"ri-close-line":"ri-menu-line");
    
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnicon.setAttribute("class","ri-menu-line");
});

const scrollRevealOptions ={
    distance: "50px",
    origin: "botton",
    duration: 1000,
};

ScrollReveal().reveal(".header_imgage img ",{
    ...scrollRevealOptions,
    origin:"right",
});

ScrollReveal().reveal(".header_container h1",{
    ...scrollRevealOptions,
    delay:500,
});

ScrollReveal().reveal(".header_container.section_description",{
    ...scrollRevealOptions,
    delay:1000,
});

ScrollReveal().reveal(".header_container.header_btn",{
    ...scrollRevealOptions,
    delay:1500,
});