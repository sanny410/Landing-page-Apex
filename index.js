const icon = document.querySelector('.hamb');
const menu = document.querySelector('.hamb-menu');

icon.addEventListener("click", () => {
    icon.classList.toggle("_active");
    menu.classList.toggle("_active")
})

