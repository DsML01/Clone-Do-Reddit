let comunidades_populares = ["r/NoStupidQuestions", "r/Minecraft", "r/TheWitcher3", "r/Samsung", "r/Whatsapp", "r/Reddit", "r/NovoNoReddit", "r/brDev", "r/big4", ""];

const subreddits = [
  "javascript",
  "python",
  "learnprogramming",
  "webdev",
  "programming",
  "technology",
  "reactjs",
  "frontend",
  "backend",
  "node",
  "vuejs",
  "angular",
  "css",
  "html",
  "devops",
  "docker",
  "linux",
  "ubuntu",
  "opensource",
  "coding",
  "compsci",
  "gamedev",
  "java",
  "csharp",
  "golang",
  "rust",
  "machinelearning",
  "datascience",
  "ai",
  "neuralnetworks",
  "chatgpt",
  "languagelearning",
  "design",
  "uxdesign",
  "productivity",
  "remotework",
  "startups",
  "freelance",
  "cybersecurity",
  "hacking",
  "privacy",
  "terminal",
  "bash",
  "vim",
  "emacs",
  "technews",
  "hardware",
  "computerscience",
  "networking",
  "sql",
  "nosql"
];

let subreddit_popular_atual = 0


function esconderSideBar(sidebarID) {
    console.log("FUNCAO CHAMADA");
    
    const sidebar = document.getElementById(sidebarID);
    
    if (!sidebar){
        console.warn('Sidebar não encontrada.');
        return;
    }
    
    sidebar.classList.toggle("sidebar-escondida");
}   

function janelaDownload(janelaId){
    console.log("FUNCAO JANELA DOWNLOAD CHAMADA");
    console.log("ID recebido: ", janelaId)

    const janela = document.getElementById(janelaId);

    if (!janela){
        console.warn('Janela não encontrada.');
        return;
    }

    janela.classList.toggle("janela-baixe-o-reddit");
    console.log("TROCAMO")
}

function ver_mais(){
    console.log("CHAMOOOU");
    const sidebar_direita = document.getElementById('sidebar-direita');
    const botao_ver_mais = document.getElementById('ver-mais-sidebar-direita');
    const subreddit_popular_inicial = subreddit_popular_atual

    for(subreddit_popular_atual; subreddit_popular_atual < subreddit_popular_inicial + 5; subreddit_popular_atual++)
    {
        const div = document.createElement("div");
        div.className = "comunidades-populares";
        div.innerHTML = `
            <img src="images/circle.svg" alt="circle">
            <span>
                r/${subreddits[subreddit_popular_atual]}
            </span>
        `;
        sidebar_direita.insertBefore(div, botao_ver_mais);
    }
}

function hideAndSeeDownloadWindow(){
    //const botao_baixar_app = document.getElementById("baixar-app");
    const janela = document.getElementById("janela-baixe-o-reddit");
    console.log(`Janela = ${janela}`);

    if (!janela){
        console.log("!JANELA")
        const div = document.createElement("div");
        div.className = "janela-baixe-o-reddit";
        div.id = "janela-baixe-o-reddit";
        div.innerHTML = `
            <button id="sair-do-download-button" onclick="hideAndSeeDownloadWindow()">
                <img src="images/cancel_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg" alt="">
            </button>
            <h3>Baixe o app do Reddit</h3>
            <p>Escaneie este código QR para baixar o app agora</p>
            <img src="images/reddit_qr_code.png" alt="qr code do reddit">
            <p>Ou confira nas lojas de aplicativos</p>
            <div id="ajustar-play-e-app-store-baixe-reddit">
                <img src="images/get-on-play-store.png" alt="get on play store" class="img-baixe-o-reddit">
                <img src="images/get-on-app-store.png" alt="get on app store" class="img-baixe-o-reddit">
            </div>             
        `;
        
        document.body.appendChild(div);
    }
    else if(janela){
        console.log("JANELA");
        document.body.removeChild(janela);
    }
}

document.addEventListener("DOMContentLoaded", () =>{

    const sidebar_direita = document.getElementById('sidebar-direita');
    const botao_ver_mais = document.getElementById('ver-mais-sidebar-direita');

    for(subreddit_popular_atual; subreddit_popular_atual < 5; subreddit_popular_atual++)
    {
        const div = document.createElement("div");
        div.className = "comunidades-populares";
        div.innerHTML = `
            <img src="images/circle.svg" alt="circle">
            <span>
                r/${subreddits[subreddit_popular_atual]}
            </span>
        `;
        sidebar_direita.insertBefore(div, botao_ver_mais);
    }
});