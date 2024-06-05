/* =========== alterar o estilo de cores ============= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

/* Fecha o style-switcher ao rolar a página */
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* ============ temas de cores ======== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}
/* ====== tema escuro ========= */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    {
        dayNight.querySelector("i").classList.toggle("fa-sun");;
        dayNight.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    }
})
window.addEventListener("load", () => {
    if(document.body.classList("dark"))
        {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})