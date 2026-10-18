const body = document.body;

const contactButton = document.getElementById("contactButton");
const contactModal = document.getElementById("contactModal");
const closeContactModal = document.getElementById("closeContactModal");
const contactModalOverlay = document.getElementById("contactModalOverlay");

function openContactModal() {
    contactModal.classList.add("active");
    contactModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeContactModal.focus();
}

function closeContactModalFn() {
    contactModal.classList.remove("active");
    contactModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

contactButton.addEventListener("click", openContactModal);
closeContactModal.addEventListener("click", closeContactModalFn);
contactModalOverlay.addEventListener("click", closeContactModalFn);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && contactModal.classList.contains("active")) {
        closeContactModalFn();
    }
});

const themeToggle = document.getElementById("themeToggle");
const printCv = document.getElementById("printCv");
const backTop = document.getElementById("backTop");
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("cv-theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    localStorage.setItem("cv-theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀" : "☾";
});

printCv.addEventListener("click", () => {
    window.print();
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backTop.classList.add("visible");
    } else {
        backTop.classList.remove("visible");
    }
});

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
