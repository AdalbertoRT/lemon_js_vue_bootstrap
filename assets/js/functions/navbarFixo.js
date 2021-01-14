export default function fixarNavbar() {
    const navbar = document.querySelector(".cabecalho");
    document.addEventListener("scroll", () => {
        let topo = document.querySelector(".topo").style.height;
        let scroll = window.scrollY;
        if (scroll > topo) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    });
}