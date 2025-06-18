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

    if(subreddit_popular_atual >= 14)
    {
        //Tenho que fazer algo para retirar as que já estão lá
        //ou remover tudo e readicionar as 5 primeiras

        let comunidades_populares = sidebar_direita.querySelectorAll('.comunidades-populares');
        const pai_comunidades_populares = comunidades_populares[0].parentNode;

        for(i = 5; i < 14; i++)
        {
            pai_comunidades_populares.removeChild(comunidades_populares[i]);
            console.log("CHAMADOOOOOO")
        }

        subreddit_popular_atual = 5;
        botao_ver_mais.innerHTML = 'Ver mais';
    }
    else
    {
        for(subreddit_popular_atual; subreddit_popular_atual < 14; subreddit_popular_atual++)
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
            
            botao_ver_mais.innerHTML = 'Ver menos';
        }
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

function addMorePosts(){
    const feed = document.getElementById('feed');
    console.log("Chamou o feed");
    for(i = 0; i < 10; i++)
    {
        const div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <div class="post-top">
            <div class="post-comunidade-info">
                <img src="images/circle.svg" alt="Comunidade" class="post-comunidade-foto">
                <div class="post-comunidade-detalhes">
                <span class="post-comunidade-nome">r/Exemplo</span>
                <span class="post-tempo">• há 5 horas</span>
                </div>
            </div>
            <div class="post-acoes">
                <button class="botao-unir-se-post">Unir-se</button>
                <button class="botao-mais-post">
                <img src="images/more.svg" alt="Mais opções" class="svg">
                </button>
            </div>
            </div>
        
            <div class="post-conteudo">
            <h2 class="post-titulo">Título do post</h2>
            <p>Conteúdo principal do post. Pode ser uma imagem, link, ou só texto mesmo.</p>
            </div>
        
            <div class="post-interacoes">
            <div class="post-votos">
                <button class="post-interacoes-button"><img src="images/upvote.svg" alt="▲" class="svg"></button>
                <span>1234</span>
                <button class="post-interacoes-button"><img src="images/downvote.svg" alt="▼" class="svg"></button>
            </div>
                <button class="post-interacoes-button">
                    <img src="images/comments.svg" alt="Comentários" class="svg">
                    <span>234 Comentários</span>
                </button>
                <button class="post-interacoes-button">
                    <img src="images/award.svg" alt="Premios" class="svg">
                    <span>3 Prêmios</span>
                </button>
                <button class="post-interacoes-button">
                    <img src="images/share.svg" alt="Compartilhar" width="24">
                    <span>Compartilhar</span>
                </button>
            </div>

        `
        feed.appendChild(div);
    }
}

document.addEventListener("DOMContentLoaded", addMorePosts());

window.addEventListener('scroll', () => {
    console.log("Scroll");
    
    console.log(window.innerHeight);
    console.log(window.scrollY);

    console.log(document.body.offsetHeight);

    console.log(window.innerHeight + window.scrollY);

    if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight) {
        console.log('Chegou ao fim da página!');
        addMorePosts();
    }
});

document.querySelectorAll('.dropdown-sidebar-esquerda-button').forEach(botao => {
  botao.addEventListener('click', () => {
    console.log("CLICOU");
    const conteudo = botao.nextElementSibling;
    const estilo = window.getComputedStyle(conteudo);
    console.log(estilo.display);    
    conteudo.style.display = estilo.display === 'block' ? 'none' : 'block';
  });
});

function hideAndSeeVerMaisSidebarEsquerda(){
    const verMais = document.getElementById('ver-mais-sidebar-esquerda-button');
    const conteudo = verMais.previousElementSibling;
    const estilo = window.getComputedStyle(conteudo);

    if (estilo.display === 'block')
    {
        conteudo.style.display = 'none';
        verMais.innerHTML = 'Ver mais';
    } 
    else if(estilo.display === 'none')
    {
        conteudo.style.display = 'block';
        verMais.innerHTML = 'Ver menos';
    }

    //conteudo.style.display = conteudo.style.display === 'block' ? 'none' : 'block';
}

const promptPetrobras = `Você é um assistente especializado exclusivamente na empresa Petrobras. Sua função é fornecer informações detalhadas, técnicas, históricas, econômicas e estratégicas sobre a Petrobras — incluindo sua fundação, áreas de atuação (exploração, produção, refino, transporte e comercialização de petróleo, gás natural e derivados), políticas ambientais, relação com o governo brasileiro, atuação no mercado internacional, estrutura corporativa, resultados financeiros e participação em projetos e parcerias. 
Não responda perguntas que não estejam diretamente relacionadas à Petrobras. Se o usuário perguntar algo fora desse escopo, gentilmente informe que só pode responder questões sobre a empresa Petrobras.`;

const promptVasco = `Você é um assistente com profundo conhecimento exclusivamente sobre o Club de Regatas Vasco da Gama, um dos clubes mais tradicionais do futebol brasileiro. Sua missão é responder sobre a história do clube, títulos conquistados, ídolos, presidentes, uniformes, estádio São Januário, categorias de base, torcida, campanhas em campeonatos, crises, reconstruções, SAF, estatísticas, entre outros aspectos diretamente ligados ao Vasco da Gama. 
Você **não** deve responder qualquer pergunta que fuja do contexto do Vasco da Gama. Caso isso ocorra, informe educadamente que só responde a assuntos relacionados ao Vasco da Gama.`

class DeepSeek{
    static API_KEY = "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";
    static API_URL = "https://openrouter.ai/api/v1/chat/completions";  

    static async gerarResposta(mensagens) {
        const headers = {
            Authorization: `Bearer ${this.API_KEY}`,
            'Content-Type': 'application/json'
        };

        const data = {
            model: 'deepseek/deepseek-chat:free',
            messages: mensagens
        };

        try {
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const json = await response.json();
            return json.choices[0].message.content;
        } catch (error) {
            console.error('Erro ao gerar resposta com DeepSeek:', error);
            return 'Desculpe, ocorreu um erro ao processar sua solicitação.';
        }
    }

}

class User{
    static users = [];

    constructor(imgLink, userName, systemPrompt){
        this.imageLink = imgLink;
        this.userName = userName;
        this.historicoMensagens = [
            {role: "system", content: systemPrompt},
            {role: "user", content: "Olá, poderia me ajudar?"},
            {role: "assistant", content: "Claro que sim, eu sou especialista no assunto, pode me perguntar qualquer coisa sobre o assunto!"}
        ];
    }

    static criarBots(){
        const Petrobras = new User("./images/petrobras-logo.svg","Petrobras", promptPetrobras);
        const Vasco = new User("./images/vasco-da-gama.svg", "Vasco da Gama", promptVasco);

        User.users.push(Petrobras);
        User.users.push(Vasco);
    }

    adicionarMensagem(role, mensagem) {
        this.mensagens.push({role, content: mensagem });
    }

}

function hideAndSeeBatePapo(){
    const janelaBatePapo = document.getElementById('bate-papo');
    const styleJanelaBatePapo = window.getComputedStyle(janelaBatePapo).display;

    janelaBatePapo.style.display = styleJanelaBatePapo === 'flex' ? 'none' : 'flex';
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("VAMOS CRIAR BOTS");
    User.criarBots();
    const janelaUsers = document.getElementById('bate-papo-conversas-conversas');

    for (const user of User.users) {
        const div = document.createElement("div");

        div.className = "bate-papo-conversas-conversas-user";
        div.innerHTML = `
            <img src="${user.imageLink}" alt="${user.userName}-logo">
            <span>${user.userName}</span>
        `;

        // Adiciona o listener diretamente ao criar
        div.addEventListener('click', () => {
            console.log(`CLICOU EM: ${user.userName}`);

            document.querySelectorAll('.bate-papo-conversas-conversas-user').forEach(el => el.classList.remove('ativo'));

            div.classList.add('ativo');

            const userInfo = document.getElementById('bate-papo-chat-user-info');

            userInfo.innerHTML = `
                <div>
                    <img src="${user.imageLink}" alt="${user.userName}-logo">
                    <span>${user.userName}</span>                    
                </div>

                <button id="close-bate-papo-button" onclick="hideAndSeeBatePapo()">
                    <img src="images/cancel_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                </button>                
            `
            
            const mensagensContainer = document.getElementById('container-mensagens');
            mensagensContainer.innerHTML = ``;

            for (const mensagem of user.historicoMensagens){
                //ESTAVA PENSANDO EM FAZER ASSIM, MAS O AMIGO ME DEU A SUSGESTÃO ABAIXO
                // if(mensagem.role === "user")
                // {git br
                //     console.log("USER");
                // }
                // else if(mensagem.role === "assistant")
                // {
                //     console.log("ASSISTANT")
                // }
                if(mensagem.role != "system")
                {
                    const msgDiv = document.createElement('div');
                    msgDiv.className = `mensagem ${mensagem.role}`;
                    msgDiv.textContent = mensagem.content;

                    mensagensContainer.appendChild(msgDiv);                     
                }
               
            }        
        });

        janelaUsers.appendChild(div);
    }
});