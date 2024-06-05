/* ======= Animação com Typed.js ======= */
const options = {
    strings: ["", "Trabalhista", "Divórcio", "Inventário"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
};

const typed = new Typed(".typing", options);

/* ===== Navegação entre seções ====== */
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const navLinks = [...nav.querySelectorAll("a")];
    const sections = [...document.querySelectorAll(".section")];

    nav.addEventListener("click", (event) => {
        const target = event.target.closest("a");
        if (target && navLinks.includes(target)) {
            navLinks.forEach((link, index) => {
                if (link.classList.contains("active")) {
                    sections[index].classList.add("back-section");
                }
                link.classList.remove("active");
            });

            target.classList.add("active");
            showSection(target);
        }
    });

    function showSection(element) {
        sections.forEach((section) => section.classList.remove("active"));
        const targetId = element.getAttribute('href').split("#")[1];
        document.querySelector(`#${targetId}`).classList.add("active");
    }
});

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const allSection = document.querySelectorAll(".section"); // Definir o allSection

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn(allSection);
});

function asideSectionTogglerBtn(allSection) {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    allSection.forEach(section => {
        section.classList.toggle("open");
    });
}
