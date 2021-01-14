import carregaCarousel from "./carousel.js"
import baseUrl from "../config.js";

export default function addItemCarousel() {
    const carouselMultiple = document.querySelector("#carousel-multiple");
    let qtdItens = 0;
    fetch("produtos.json")
        .then(r => r.json())
        .then(itens => {
            qtdItens = itens.length;
            for (let i = 0; i < qtdItens; i++) {
                let desc = itens[i].titulo;
                let item = document.createElement('a');
                let href = `${baseUrl()}/produto.html?id=${itens[i].id}`;
                let img = document.createElement("img");
                let span = document.createElement("span");
                img.setAttribute('src', `assets/images/${itens[i].img}`)
                img.setAttribute('alt', `Produto ${itens[i].id}`);
                span.classList.add("item-title");
                span.innerText = desc.toUpperCase();

                item.classList.add("item");
                item.setAttribute('href', href);
                item.appendChild(img);
                item.appendChild(span);

                carouselMultiple.appendChild(item);
            }

            carregaCarousel();
        })

};
