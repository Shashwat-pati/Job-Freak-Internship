const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    nav.classList.toggle("fixed", window.scrollY > 0);
});
