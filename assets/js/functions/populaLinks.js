import baseUrl from "../config.js";
import capitalize from "./capitalize.js";

export default function populaLinks() {
    const nossosProdutos = document.querySelector("#nossosProdutos");
    let qtdItens = 0;
    fetch("produtos.json")
        .then(r => r.json())
        .then(itens => {
            qtdItens = itens.length;
            for (let i = 0; i < qtdItens; i++) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                let href = `${baseUrl()}/produto.html?id=${itens[i].id}`;

                a.setAttribute('href', href);
                a.innerText = capitalize(itens[i].titulo);

                li.appendChild(a);

                nossosProdutos.appendChild(li);
            }
        })
};

{/* <li v-for="link in produtos">
              <a :href=" baseUrl + '/produto.html?id=' + link.id ">{{capitalize(link.titulo)}}</a>
            </li> */}