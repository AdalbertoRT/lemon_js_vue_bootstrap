export default function addItemSlider() {
    const slider = document.querySelector(".slide .carousel-inner");
    let titulo = "LEMON";
    let subtitulo = "PRODUTOS DERIVADOS DO LIMÃO";
    let paragrafo1 = "A LEMON POSSUI UMA EXTENSA GAMA DE PRODUTOS, E TODOS DERIVADOS DESTA DELICIOSA FRUTA.";
    let paragrafo2 = "CLIQUE NO BOTÃO ABAIXO E CONHEÇA TODOS ELES.";
    let linkText = "TODOS OS PRODUTOS LEMON";
    let imagem = "banner-lg.png";
    let link = "";
    let qtdItens = 2;
    for (let i = 0; i < qtdItens; i++) {
        let item = document.createElement('div');
        item.classList.add("carousel-item");
        if (i == 0) {
            item.classList.add("active");
        }

        let img = document.createElement('img');
        img.classList.add("d-block", "w-100");
        img.setAttribute("src", `assets/images/${imagem}`);
        img.setAttribute("alt", `Slide ${i}`);

        let container = document.createElement('div');
        container.classList.add("slide-container");

        let texto = document.createElement('div');
        texto.classList.add("text-left", "slide-desc");
        let h2 = document.createElement('h2');
        h2.classList.add("font-weight-bold");
        h2.innerText = titulo.toUpperCase();
        let h3 = document.createElement('h3');
        h3.classList.add("sub-title", "font-weight-bold");
        h3.innerText = subtitulo.toUpperCase();
        let h4 = document.createElement('h4');
        h4.innerText = paragrafo1.toUpperCase();
        let h5 = document.createElement('h5');
        h5.innerText = paragrafo2.toUpperCase();
        let a = document.createElement('a');
        a.setAttribute("href", link);
        a.innerText = linkText.toUpperCase();
        texto.appendChild(h2);
        texto.appendChild(h3);
        texto.appendChild(h4);
        texto.appendChild(h5);
        texto.appendChild(a);

        container.appendChild(texto);

        item.appendChild(img);
        item.appendChild(container);

        // item.appendChild(container);

        slider.appendChild(item);
    }
};
