Vue.component("cabecalho", {
  template: `
    <header>
        <!-- TOPO -->
        <div class="topo">
            <div class="topo-container container p-0">
                <a href="tel:(17) 3022-3715" class="tel">(17) 3022-3715</a>
                <a href="mailto:COMERCIAL@LEMON.COM.BR" class="mail">COMERCIAL@LEMON.COM.BR</a>
              <button class="m-0 btn" data-toggle="modal" data-target="#orcamento">PEDIR UM ORÇAMENTO</button>
            </div>
        </div>
        <!-- NAVBAR -->
        <div class="cabecalho container-fluid p-0">
        <nav class="navbar navbar-expand-md navbar-light bg-white container d-flex align-items-center p-0">
            <a class="navbar-brand logo" href="index.html" title="Lemon"><img src="assets/images/logo-lg.png" alt="Lemon" width="100px"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto w-100 d-flex justify-content-end">
                <li class="nav-item active">
                <a class="nav-link" href="index.html">PÁGINA INICIAL<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="sobre.html">QUEM SOMOS</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="produtos.html">PRODUTOS</a>
                </li>
                <li class="nav-item">
                <a class="nav-link contato" data-toggle="modal" data-target="#contato-modal">CONTATO</a>
                </li>
                <li class="nav-item sociais d-flex justify-content-between">
                <a class="nav-link" href="https://www.facebook.com/ecowebdesign.sites" target="_blank"><img src="assets/images/facebook-lg.png" alt="Facebook"></a>
                <a class="nav-link" href="https://www.instagram.com/eco.webdesign/?hl=pt-br" target="_blank"><img src="assets/images/instagram-lg.png" alt="Instagram"></a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
    </header>
    `
});

Vue.component("slider", {
  template: `
    <div id="carouselExampleControls" class="carousel slide p-0" data-ride="carousel">
            <div class="carousel-inner">
              
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
    `
});

Vue.component("banner", {
  template: `
    <div class="jumbotron jumbotron-fluid p-0 m-0">
      <div class="conteudo">
        <div class="j-text">
        <h1>SABOR E SAÚDE</h1>
          <h2>CAMINHANDO LADO A LADO</h2>
          <div id="traco"></div>
          <p>A Lemon é uma empresa que tem como principal objetivo trazer o sabor do limão orgânico em todos os produtos,
            alinhando à uma produção sustentável e consciente.</p>
          <p>Mudar a forma de ver o alimento e seus benefícios é nossa principal missão.</p>
          <a>CONHECER A LEMON</a>
        </div>
        <img src="assets/images/lemon-juice-lg.png" alt="Lemon Juice"/>
      </div>
    </div>
    `
});

Vue.component("carousel", {
  props: ['produtos', 'base-url'],
  template: `
    <div class="slick-carousel">
      <div class="fundo"></div>
        <h5 class="text-center font-weight-bold">PRODUTOS DA NOSSA LINHA</h5>
      <div id="carousel-multiple" class="container">
        <a v-for="item in produtos" :href=" baseUrl + '/produto.html?id=' + item.id " class="item">
          <img :src=" 'assets/images/' + item.img" :alt="item.titulo">
          <span class="item-titulo">{{item.titulo.toUpperCase()}}</span>
        </a>
      </div>
    </div>
    `
});

Vue.component("rodape", {
  props: ['produtos', 'base-url'],
  methods: {
    capitalize: function (txt) {
      let item = txt.toLowerCase();
      let cap = txt.toUpperCase();
      item = item.substr(1);
      cap = cap.split('', 1);
      return cap + item;
    },
  },
  template: `
    <footer class="p-0">
    {{this.listaProdutos}}
        <div class="footer-content">
          <ul id="institucional">
            <h6>INSTITUCIONAL</h6>
            <li><a href="index.html" class="btn btn-link">Página Inicial</a></li>
            <li><a href="sobre.html" class="btn btn-link">Quem Somos</a></li>
            <li><a href="produtos.html" class="btn btn-link">Produtos</a></li>
            <li><a class="btn btn-link" data-toggle="modal" data-target="#contato-modal">Contato</a></li>
          </ul>
          <ul id="nossosProdutos">
            <h6>NOSSOS PRODUTOS</h6>
            
          </ul>
          <ul id="contato">
            <h6>CONTATO & ENDEREÇO</h6>
            <li><div></div>Avenida México, 688 - Jardim Primavera São José do Rio Preto - SP</li>
            <li><div></div>(17) 3022-3715</li>
            <li><div></div>COMERCIAL@LEMON.COM.BR</li>
          </ul>
          <ul id="sobre">
            <h6>SOBRE</h6>
            <li>A Lemon é uma empresa que atua desde 1995 na comercialização de produtos derivados da fruta limão. Nosso grande diferencial é a qualidade e o carinho que colocamos na produção de cada um de nossos produtos.</li>
          </ul>
        </div>
        <div class="copy"><small>2020 &copy; LEMON EXAMPLE. Todos os Direitos Reservados. Desenvolvimento <span>Adalberto R Teixeira</span></small></div>
        <div id="selos">
          <img src="assets/images/w3ccss-lg.png" width="20px" height="10px" alt="W3C CSS3"><img src="assets/images/w3chtml-lg.png" width="20px" height="10px" alt="W3C HTML5">
        </div>
    </footer>
    `
});

Vue.component("modais", {
  template: `
  <div>
  <!-- ORÇAMENTO -->
  <div class="modal fade" id="orcamento" tabindex="-1" role="dialog" aria-labelledby="orcamento" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-success text-white">
          <h5 class="modal-title" id="orcamento-title">ORÇAMENTO</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <textarea class="w-100" name="msg-orcamento" id="msg-orcamento" cols="30" rows="5" placeholder="Escreva sua mensagem aqui"></textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-success" data-dismiss="modal">Enviar</button>
        </div>
      </div>
    </div>
  </div>
  <!-- CONTATO -->
  <div class="modal fade" id="contato-modal" tabindex="-1" role="dialog" aria-labelledby="contato-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-success text-white">
          <h5 class="modal-title" id="contato-modal-title">CONTATO & ENDEREÇO</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="my-1"><span class="font-weight-bold">Telefone: </span>(17) 3022-3715</p>
          <p class="my-1"><span class="font-weight-bold">Email: </span>COMERCIAL@LEMON.COM.BR</p>
          <p class="my-1"><span class="font-weight-bold">Endereço: </span>Avenida México, 688 - Jardim Primavera São José do Rio Preto - SP</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.7722811793833!2d-49.367140385499766!3d-20.800498571336572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc52b34ebd1357%3A0x8569e351f362ee6f!2sAv.%20M%C3%A9xico%2C%20688%20-%20Jardim%20America%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015055-340!5e0!3m2!1spt-BR!2sbr!4v1598068195639!5m2!1spt-BR!2sbr" frameborder="0" style="border:0; width: 100%; height: 100%; margin: 5px 0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          <fieldset class="border px-1">
            <legend class="font-weight-bold text-center w-25">CONTATO</legend>
            <form>
              <div class="form-group p-0 m-0">
                <label class="font-weight-bold p-0 m-0" for="email">E-mail</label>
                <input type="mail" id="email" class="form-control" placeholder="Seu email">
                <label class="font-weight-bold p-0 m-0" for="msg">Mensagem</label>
                <textarea id="msg" class="form-control" placeholder="Sua Mensagem"></textarea>
              </div>
              <div class="form-group text-right d-flex p-0 m-0">
                <button type="button" class="btn btn-warning btn-small btn-block p-0 m-1" data-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-success btn-block btn-small p-0 m-1" data-dismiss="modal">Enviar</button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
  <!-- COMPRA -->
  <div class="modal fade" id="compra" tabindex="-1" role="dialog" aria-labelledby="compra" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-success text-white">
          <h5 class="modal-title" id="compra-title">COMPRA EFETUADA</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h2 class="text-warning">OBRIGADO PELA COMPRA!</h2>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal">Ficar</button>
          <a type="button" href="index.html" class="btn btn-success">Voltar para o Início</a>
        </div>
      </div>
    </div>
  </div>
  </div>
  `
});

const app = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: [],
    nutricional: [],
    baseUrl: ''

  },
  methods: {
    puxaProduto: function () {
      let id = this.capturaId();
      fetch("produtos.json")
        .then(r => r.json())
        .then(prod => {
          prod.forEach(element => {
            this.produtos.push(element);
            if (element.id == id) {
              this.produto.push(element);
              this.nutricional.push(element.nutricional);
            }
          });
        })
    },
    capturaId: function () {
      let url = location.search.slice(1);
      let id = url.split('=');
      id = id[1];
      return id;
    },
    url: function () {
      const url = window.location.href;
      let array_url = url.split("/");
      array_url.pop();
      let novoUrl = array_url.join("/");
      this.baseUrl = novoUrl;
    }
  },
  created: function () {
    this.url()
    this.puxaProduto()
  },
});
