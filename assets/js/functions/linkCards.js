export default function linkCards() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let a = card.querySelector("a.comprar");
        card.addEventListener("click", () => {
            window.location.href = a.getAttribute("href");
        })
    });
}
