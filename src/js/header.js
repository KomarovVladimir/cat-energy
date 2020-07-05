document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const offset = 128;

    document.addEventListener("scroll", () => {
        window.pageYOffset >= offset ? header.classList.add("header_scrolled") : header.classList.remove("header_scrolled");
    });

    const button = document.querySelector(".header__mobile-button");
    const menu = document.querySelector(".header__nav");

    button.addEventListener("click", () => {
        console.log(menu.classList.contains("header__nav_show"));
        
        menu.classList.contains("header__nav_show") ? menu.classList.remove("header__nav_show") : menu.classList.add("header__nav_show");
    });

    const navItem = document.querySelector(".header__nav-item");

    navItem.addEventListener("click", () => {
        menu.classList.remove("header__nav_show");
    });
});