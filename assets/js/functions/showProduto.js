import capturaId from "./capturaId.js"
import initAnimeScroll from "./dataAnime.js"

export default function showProduto() {
    const prodShow = document.querySelector(".produto-show");
    const id = parseInt(capturaId());

    let qtdItens = 0;
    fetch("produtos.json")
        .then(r => r.json())
        .then(itens => {
            qtdItens = itens.length;
            for (let i = 0; i < qtdItens; i++) {

                if (itens[i].id == id) {
                    document.querySelector(".titulo").innerText = itens[i].titulo
                    let prodImg = document.createElement('div');
                    prodImg.classList.add('prod-img');
                    let img = document.createElement('img');
                    let href = `assets/images/${itens[i].img.replace('.png', '-lg.png')}`;
                    img.setAttribute('src', href);
                    img.setAttribute('data-anime', 'left');

                    let prodDesc = document.createElement('div');
                    prodDesc.classList.add('prod-desc');
                    prodDesc.setAttribute('data-anime', 'right');

                    let h2 = document.createElement('h2');
                    h2.innerText = itens[i].titulo;

                    let p1 = document.createElement('p');
                    p1.innerText = "Lorem ipsum dolor sit amet.";

                    let traco = document.createElement('div');
                    traco.classList.add("traco");

                    let p2 = document.createElement('p');
                    p2.innerText = itens[i].descricao;

                    prodImg.append(img);

                    prodDesc.appendChild(h2);
                    prodDesc.appendChild(p1);
                    prodDesc.appendChild(traco);
                    prodDesc.appendChild(p2);

                    prodShow.appendChild(prodImg);
                    prodShow.appendChild(prodDesc);
                }
            }
            initAnimeScroll();
        })
};
            // <div class="prod-img">
            //         <img :src=" baseUrl + './assets/images/' + produto[0].img.replace('.png', '-lg.png') " alt="Produto produto[0].id" class="init-animate" data-anime="left">
            //     </div>
            //     <div class="prod-desc init-animate" data-anime="right">
            //         <h2>{{produto[0].titulo}}</h2>
            //         <p>Lorem ipsum dolor sit amet.</p>
            //         <div class="traco"></div>
            //         <p>{{produto[0].descricao}}</p>
            //     </div>