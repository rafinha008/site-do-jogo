const botao = document.getElementById("troca-tema");

function atualizarIcone() {
    if (document.body.classList.contains("dark-theme")) {
        botao.textContent = "\u2600\uFE0E";
        botao.setAttribute("aria-label", "Mudar para o tema claro");
    } else {
        botao.textContent = "\u263E";
        botao.setAttribute("aria-label", "Mudar para o tema escuro");
    }
}

if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("dark-theme");
}
atualizarIcone();

botao.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
    atualizarIcone();
});

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const cards = document.querySelectorAll(".card");
const carousel = document.querySelector(".carousel");
let currentIndex = 0;
let timer;

if (carousel) {
    function showCard(index) {
        const total = cards.length;
        cards.forEach(function (card, i) {
            const posicao = ((i - index) % total + total) % total;
            card.classList.remove("centro", "esquerda", "direita", "oculto");
            if (posicao === 0) {
                card.classList.add("centro");
            } else if (posicao === 1) {
                card.classList.add("direita");
            } else if (posicao === total - 1) {
                card.classList.add("esquerda");
            } else {
                card.classList.add("oculto");
            }
        });
    }

    function avancar() {
        currentIndex++;
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }
        showCard(currentIndex);
    }

    function voltar() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }
        showCard(currentIndex);
    }

    function iniciarAutoplay() {
        clearInterval(timer);
        timer = setInterval(avancar, 8000);
    }

    next.addEventListener("click", function () {
        avancar();
        iniciarAutoplay();
    });

    prev.addEventListener("click", function () {
        voltar();
        iniciarAutoplay();
    });

    let toqueInicio = 0;
    carousel.addEventListener("touchstart", function (evento) {
        toqueInicio = evento.touches[0].clientX;
    }, { passive: true });

    carousel.addEventListener("touchend", function (evento) {
        const diferenca = evento.changedTouches[0].clientX - toqueInicio;
        if (Math.abs(diferenca) > 40) {
            if (diferenca < 0) {
                avancar();
            } else {
                voltar();
            }
            iniciarAutoplay();
        }
    });

    showCard(0);
    iniciarAutoplay();
}

const traducoes = {
    "pt": {
        "nav_inicio": "Início",
        "nav_sobre": "Sobre",
        "nav_criadores": "Criadores",
        "nav_documentacao": "Documentação",
        "nav_musica": "Músicas",

        "fase1_nome": "Fase 1",
        "fase1_desc": "Lan House",
        "fase2_nome": "Fase 2",
        "fase2_desc": "Assistência Técnica",
        "fase3_nome": "Fase 3",
        "fase3_desc": "Empresa de Tecnologia",

        "titulo_sobre": "Sobre o Jogo",
        "desc_sobre": "ByteRise é um jogo clicker para celular que conta a história de um jovem com um sonho: construir a maior lanhouse do mundo. Tudo começa de forma humilde, com poucas máquinas e quase nenhum dinheiro. A cada toque na tela, o jogador ganha recursos para investir em novos computadores, atrair mais clientes e fazer o negócio crescer. Para chegar ao topo, é preciso administrar bem o tempo, o dinheiro e os recursos, tomando decisões estratégicas pelo caminho. Com visual em pixel art, cutscenes e uma trilha sonora criada para o jogo, ByteRise transforma a jornada de um pequeno comércio em uma aventura divertida e desafiadora.",

        "titulo_ferramentas": "Ferramentas Usadas",
        "desc_ferramenta1": "Engine usada para desenvolver o jogo.",
        "desc_ferramenta2": "Software usado para criar as cutscenes e algumas sprites.",
        "desc_ferramenta3": "Software usado para criar as sprites.",
        "desc_ferramenta4": "Software usado para criar música.",

        "galeria_storyboard": "Storyboards",
        "galeria_storyboards": "Storyboards",
        "galeria_cenarios": "Cenários",
        "galeria_sprites": "Sprites",
        "galeria_codigo": "Código",
        "codigo_dica": "Passe o mouse ou toque para abrir",
        "codigo_resultado": "Resultado no jogo",

        "titulo_personagens": "Personagens",
        "titulo_principal": "Personagem Principal",

        "titulo_musica": "Trilha Sonora",
        "mus1_titulo": "Música 1",
        "mus1_desc": "Trilha de fundo",
        "mus2_titulo": "Música 2",
        "mus2_desc": "Trilha de vitória",

        "sb1_titulo": "Storyboard 1",
        "sb1_desc": "Storyboard da primeira fase.",
        "sb2_titulo": "Storyboard 2",
        "sb2_desc": "Storyboard da segunda fase.",
        "sb3_titulo": "Storyboard 3",
        "sb3_desc": "Storyboard da terceira fase.",

        // Fliperama Alfredo (Níveis 1, 3, 6 e 9)
        "spr1_v1_titulo": "Fliperama Alfredo - Nível 1",
        "spr1_v1_desc": "Versão inicial do fliperama Alfredo.",
        "spr1_v2_titulo": "Fliperama Alfredo - Nível 3",
        "spr1_v2_desc": "Segunda evolução do fliperama Alfredo.",
        "spr1_v3_titulo": "Fliperama Alfredo - Nível 6",
        "spr1_v3_desc": "Terceira evolução do fliperama Alfredo.",
        "spr1_v4_titulo": "Fliperama Alfredo - Nível 9",
        "spr1_v4_desc": "Evolução máxima do fliperama Alfredo.",

        // Fliperama Cube (Níveis 1, 3, 6 e 9)
        "spr2_v1_titulo": "Fliperama Cube - Nível 1",
        "spr2_v1_desc": "Versão inicial do fliperama Cube.",
        "spr2_v2_titulo": "Fliperama Cube - Nível 3",
        "spr2_v2_desc": "Segunda evolução do fliperama Cube.",
        "spr2_v3_titulo": "Fliperama Cube - Nível 6",
        "spr2_v3_desc": "Terceira evolução do fliperama Cube.",
        "spr2_v4_titulo": "Fliperama Cube - Nível 9",
        "spr2_v4_desc": "Evolução máxima do fliperama Cube.",

        // Fliperama Pocket (Níveis 1, 3, 6 e 9)
        "spr3_v1_titulo": "Fliperama Pocket - Nível 1",
        "spr3_v1_desc": "Versão inicial do fliperama Pocket.",
        "spr3_v2_titulo": "Fliperama Pocket - Nível 3",
        "spr3_v2_desc": "Segunda evolução do fliperama Pocket.",
        "spr3_v3_titulo": "Fliperama Pocket - Nível 6",
        "spr3_v3_desc": "Terceira evolução do fliperama Pocket.",
        "spr3_v4_titulo": "Fliperama Pocket - Nível 9",
        "spr3_v4_desc": "Evolução máxima do fliperama Pocket.",

        // Fase 2 (Mesas)
        "spr4_titulo": "Mesa Fonte",
        "spr4_desc": "Mesa de conserto de fontes.",
        "spr5_titulo": "Mesa GPU",
        "spr5_desc": "Mesa de conserto de placas de vídeo.",
        "spr6_titulo": "Mesa HD",
        "spr6_desc": "Mesa de conserto de discos rígidos.",

        // Fase 3 (Empresa de Tecnologia)
        "spr7_titulo": "Caminhão de Entregas",
        "spr7_desc": "Caminhão responsável pelo transporte e entrega dos equipamentos.",
        "spr8_titulo": "Esteira de Produção",
        "spr8_desc": "Esteira automatizada da linha de montagem.",

        // Cenários
        "cen1_v1_titulo": "Cenário Fase 1 - Nível 1",
        "cen1_v1_desc": "Início da Lan House.",
        "cen1_v2_titulo": "Cenário Fase 1 - Nível 2",
        "cen1_v2_desc": "Primeiras melhorias na Lan House.",
        "cen1_v3_titulo": "Cenário Fase 1 - Nível 3",
        "cen1_v3_desc": "Lan House em expansão.",
        "cen1_v4_titulo": "Cenário Fase 1 - Nível 4",
        "cen1_v4_desc": "Lan House no nível máximo.",

        "cen2_v1_titulo": "Cenário Fase 2 - Nível 1",
        "cen2_v1_desc": "Início da Assistência Técnica.",
        "cen2_v2_titulo": "Cenário Fase 2 - Nível 2",
        "cen2_v2_desc": "Bancadas aprimoradas na Assistência Técnica.",
        "cen2_v3_titulo": "Cenário Fase 2 - Nível 3",
        "cen2_v3_desc": "Assistência Técnica em expansão.",
        "cen2_v4_titulo": "Cenário Fase 2 - Nível 4",
        "cen2_v4_desc": "Assistência Técnica no nível máximo.",

        "cen3_titulo": "Cenário Fase 3",
        "cen3_desc": "Sede da Empresa de Tecnologia.",

        // Personagens
        "pers1_titulo": "Esbanjador",
        "pers1_desc": "Cliente que gasta bastante na loja.",
        "pers2_titulo": "Idoso",
        "pers2_desc": "Cliente frequente da lan house.",
        "pers3_titulo": "Mãe e Filho",
        "pers3_desc": "Clientes que visitam o espaço juntos.",
        "pers4_titulo": "Montador",
        "pers4_desc": "Técnico especialista em montagem de computadores.",
        "pers5_titulo": "Pão Duro",
        "pers5_desc": "Cliente econômico que procura os menores preços.",
        "pers6_titulo": "Programador",
        "pers6_desc": "Desenvolvedor da empresa de tecnologia.",
        "pers7_titulo": "Recolhimento",
        "pers7_desc": "Responsável pela coleta e logística de equipamentos.",

        // Personagem Principal
        "prin1_titulo": "Protagonista - Fase 1",
        "prin1_desc": "Visual do protagonista no início da jornada.",
        "prin2_titulo": "Protagonista - Fase 2",
        "prin2_desc": "Visual do protagonista na assistência técnica.",
        "prin3_titulo": "Protagonista - Fase 3",
        "prin3_desc": "Visual do protagonista como dono da empresa de tecnologia.",

        "cod1_titulo": "Código 1",
        "cod1_desc": "Trecho do código do jogo.",
        "cod2_titulo": "Código 2",
        "cod2_desc": "Trecho do código do jogo.",
        "cod3_titulo": "Código 3",
        "cod3_desc": "Trecho do código do jogo.",
        "cod4_titulo": "Código 4",
        "cod4_desc": "Trecho do código do jogo.",
        "cod5_titulo": "Código 5",
        "cod5_desc": "Trecho do código do jogo.",

        "funcao_criador1": "Programador",
        "funcao_criador2": "Programador",
        "funcao_criador3": "Cenários e Sprites",
        "funcao_criador4": "Programador Web e Músicas",
        "funcao_criador5": "Cenários e Cutscenes",

        "titulo_creditos": "Créditos",
        "desc_creditos": "Obrigado por jogar ByteRise!",
        "btn_download": "Baixar o jogo",
        "footer_direitos": "© 2026 ByteRise. Todos os direitos reservados.",
        "footer_voltar_topo": "Voltar ao topo",
        "docs_escolha": "Escolha um arquivo para abrir:",

        "doc1_nome": "Informações sobre o ByteRise",
        "doc1_desc": "Documento com detalhes sobre o desenvolvimento do jogo.",
        "doc2_nome": "Storyboard",
        "doc2_desc": "Esboços originais e planejamento visual.",

        "btn_download_android": "Baixar para Android (.apk)",
        "btn_download_pc": "Baixar para PC (.zip)",
        "qr_texto": "Escaneie o QR code com o celular",
        "download_escolha": "Ou baixe o arquivo:",
        "download_android_desc": "Para instalar direto no celular Android.",
        "download_pc_desc": "Para jogar no computador (descompacte o arquivo).",
        "btn_jogar_web": "Jogar no navegador (iPhone e outros)",
        "download_web_desc": "Sem instalar nada, pelo link do GX.games."
    },

    "en": {
        "nav_inicio": "Home",
        "nav_sobre": "About",
        "nav_criadores": "Creators",
        "nav_documentacao": "Documentation",
        "nav_musica": "Music",

        "fase1_nome": "Level 1",
        "fase1_desc": "LAN House",
        "fase2_nome": "Level 2",
        "fase2_desc": "Tech Repair Shop",
        "fase3_nome": "Level 3",
        "fase3_desc": "Tech Company",

        "titulo_sobre": "About the Game",
        "desc_sobre": "ByteRise is a mobile clicker game that tells the story of a young man with a dream: to build the largest LAN house in the world. It all starts humbly, with few machines and almost no money. With every tap on the screen, the player earns resources to invest in new computers, attract more customers, and make the business grow. To reach the top, you need to manage time, money, and resources well, making strategic decisions along the way. With pixel art visuals, cutscenes, and an original soundtrack, ByteRise transforms the journey of a small business into a fun and challenging adventure.",

        "titulo_ferramentas": "Tools Used",
        "desc_ferramenta1": "Engine used to develop the game.",
        "desc_ferramenta2": "Software used to create the cutscenes and some of the sprites.",
        "desc_ferramenta3": "Software used to create the sprites.",
        "desc_ferramenta4": "Software used to create music.",

        "galeria_storyboard": "Storyboards",
        "galeria_storyboards": "Storyboards",
        "galeria_cenarios": "Scenery",
        "galeria_sprites": "Sprites",
        "galeria_codigo": "Code",
        "codigo_dica": "Hover or tap to open",
        "codigo_resultado": "Result in the game",

        "titulo_personagens": "Characters",
        "titulo_principal": "Main Character",

        "titulo_musica": "Soundtrack",
        "mus1_titulo": "Track 1",
        "mus1_desc": "Background theme",
        "mus2_titulo": "Track 2",
        "mus2_desc": "Victory theme",

        "sb1_titulo": "Storyboard 1",
        "sb1_desc": "Storyboard of the first level.",
        "sb2_titulo": "Storyboard 2",
        "sb2_desc": "Storyboard of the second level.",
        "sb3_titulo": "Storyboard 3",
        "sb3_desc": "Storyboard of the third level.",

        // Alfredo Arcade (Levels 1, 3, 6 and 9)
        "spr1_v1_titulo": "Alfredo Arcade - Level 1",
        "spr1_v1_desc": "Initial version of the Alfredo arcade.",
        "spr1_v2_titulo": "Alfredo Arcade - Level 3",
        "spr1_v2_desc": "Second upgrade of the Alfredo arcade.",
        "spr1_v3_titulo": "Alfredo Arcade - Level 6",
        "spr1_v3_desc": "Third upgrade of the Alfredo arcade.",
        "spr1_v4_titulo": "Alfredo Arcade - Level 9",
        "spr1_v4_desc": "Max level of the Alfredo arcade.",

        // Cube Arcade (Levels 1, 3, 6 and 9)
        "spr2_v1_titulo": "Cube Arcade - Level 1",
        "spr2_v1_desc": "Initial version of the Cube arcade.",
        "spr2_v2_titulo": "Cube Arcade - Level 3",
        "spr2_v2_desc": "Second upgrade of the Cube arcade.",
        "spr2_v3_titulo": "Cube Arcade - Level 6",
        "spr2_v3_desc": "Third upgrade of the Cube arcade.",
        "spr2_v4_titulo": "Cube Arcade - Level 9",
        "spr2_v4_desc": "Max level of the Cube arcade.",

        // Pocket Arcade (Levels 1, 3, 6 and 9)
        "spr3_v1_titulo": "Pocket Arcade - Level 1",
        "spr3_v1_desc": "Initial version of the Pocket arcade.",
        "spr3_v2_titulo": "Pocket Arcade - Level 3",
        "spr3_v2_desc": "Second upgrade of the Pocket arcade.",
        "spr3_v3_titulo": "Pocket Arcade - Level 6",
        "spr3_v3_desc": "Third upgrade of the Pocket arcade.",
        "spr3_v4_titulo": "Pocket Arcade - Level 9",
        "spr3_v4_desc": "Max level of the Pocket arcade.",

        // Level 2 (Desks)
        "spr4_titulo": "Power Supply Desk",
        "spr4_desc": "Power supply repair desk.",
        "spr5_titulo": "GPU Desk",
        "spr5_desc": "Graphics card repair desk.",
        "spr6_titulo": "HDD Desk",
        "spr6_desc": "Hard drive repair desk.",

        // Level 3 (Tech Company)
        "spr7_titulo": "Delivery Truck",
        "spr7_desc": "Truck responsible for transporting and delivering hardware.",
        "spr8_titulo": "Conveyor Belt",
        "spr8_desc": "Automated assembly line conveyor belt.",

        // Scenery
        "cen1_v1_titulo": "Level 1 Scenery - Tier 1",
        "cen1_v1_desc": "Beginning of the LAN House.",
        "cen1_v2_titulo": "Level 1 Scenery - Tier 2",
        "cen1_v2_desc": "First upgrades to the LAN House.",
        "cen1_v3_titulo": "Level 1 Scenery - Tier 3",
        "cen1_v3_desc": "Expanding LAN House.",
        "cen1_v4_titulo": "Level 1 Scenery - Tier 4",
        "cen1_v4_desc": "Maxed-out LAN House.",

        "cen2_v1_titulo": "Level 2 Scenery - Tier 1",
        "cen2_v1_desc": "Beginning of the Tech Repair Shop.",
        "cen2_v2_titulo": "Level 2 Scenery - Tier 2",
        "cen2_v2_desc": "Upgraded workbenches in the Repair Shop.",
        "cen2_v3_titulo": "Level 2 Scenery - Tier 3",
        "cen2_v3_desc": "Expanding Tech Repair Shop.",
        "cen2_v4_titulo": "Level 2 Scenery - Tier 4",
        "cen2_v4_desc": "Maxed-out Tech Repair Shop.",

        "cen3_titulo": "Level 3 Scenery",
        "cen3_desc": "Tech Company Headquarters.",

        // Characters
        "pers1_titulo": "Big Spender",
        "pers1_desc": "Customer who spends heavily at the shop.",
        "pers2_titulo": "Senior",
        "pers2_desc": "Regular LAN house customer.",
        "pers3_titulo": "Mother and Son",
        "pers3_desc": "Customers who visit the place together.",
        "pers4_titulo": "PC Builder",
        "pers4_desc": "Technician specialized in building computers.",
        "pers5_titulo": "Penny Pincher",
        "pers5_desc": "Thrifty customer looking for the lowest prices.",
        "pers6_titulo": "Programmer",
        "pers6_desc": "Software developer at the tech company.",
        "pers7_titulo": "Collector",
        "pers7_desc": "Responsible for equipment pickup and logistics.",

        // Main Character
        "prin1_titulo": "Protagonist - Level 1",
        "prin1_desc": "Protagonist's look at the start of the journey.",
        "prin2_titulo": "Protagonist - Level 2",
        "prin2_desc": "Protagonist's look at the tech repair shop.",
        "prin3_titulo": "Protagonist - Level 3",
        "prin3_desc": "Protagonist's look as the tech company CEO.",

        "cod1_titulo": "Code 1",
        "cod1_desc": "Snippet of the game's code.",
        "cod2_titulo": "Code 2",
        "cod2_desc": "Snippet of the game's code.",
        "cod3_titulo": "Code 3",
        "cod3_desc": "Snippet of the game's code.",
        "cod4_titulo": "Code 4",
        "cod4_desc": "Snippet of the game's code.",
        "cod5_titulo": "Code 5",
        "cod5_desc": "Snippet of the game's code.",

        "funcao_criador1": "Programmer",
        "funcao_criador2": "Programmer",
        "funcao_criador3": "Scenery and Sprites",
        "funcao_criador4": "Web Developer and Music",
        "funcao_criador5": "Scenery and Cutscenes",

        "titulo_creditos": "Credits",
        "desc_creditos": "Thanks for playing ByteRise!",
        "btn_download": "Download game",
        "footer_direitos": "© 2026 ByteRise. All rights reserved.",
        "footer_voltar_topo": "Back to top",
        "docs_escolha": "Choose a file to open:",

        "doc1_nome": "Information about ByteRise",
        "doc1_desc": "Document with details about the game's development.",
        "doc2_nome": "Storyboard",
        "doc2_desc": "Original sketches and visual planning.",

        "btn_download_android": "Download for Android (.apk)",
        "btn_download_pc": "Download for PC (.zip)",
        "qr_texto": "Scan the QR code with your phone",
        "download_escolha": "Or download the file:",
        "download_android_desc": "To install directly on an Android phone.",
        "download_pc_desc": "To play on a computer (unzip the file).",
        "btn_jogar_web": "Play in your browser (iPhone and others)",
        "download_web_desc": "No install needed, through the GX.games link."
    },

    "es": {
        "nav_inicio": "Inicio",
        "nav_sobre": "Acerca de",
        "nav_criadores": "Creadores",
        "nav_documentacao": "Documentación",
        "nav_musica": "Música",

        "fase1_nome": "Fase 1",
        "fase1_desc": "Cibercafé",
        "fase2_nome": "Fase 2",
        "fase2_desc": "Servicio Técnico",
        "fase3_nome": "Fase 3",
        "fase3_desc": "Empresa de Tecnología",

        "titulo_sobre": "Sobre el Juego",
        "desc_sobre": "ByteRise es un juego clicker para móviles que cuenta la historia de un joven con un sueño: construir el cibercafé más grande del mundo. Todo empieza de forma humilde, con pocas máquinas y casi sin dinero. Con cada toque en la pantalla, el jugador gana recursos para invertir en nuevos ordenadores, atraer más clientes y hacer crecer el negocio. Para llegar a lo más alto, es necesario administrar bien el tiempo, el dinero y los recursos, tomando decisiones estratégicas en el camino. Con gráficos en pixel art, cinemáticas y una banda sonora original, ByteRise transforma el viaje de un pequeño comercio en una aventura divertida y desafiante.",

        "titulo_ferramentas": "Herramientas Usadas",
        "desc_ferramenta1": "Motor usado para desarrollar el juego.",
        "desc_ferramenta2": "Software usado para crear las cutscenes y algunos sprites.",
        "desc_ferramenta3": "Software usado para crear los sprites.",
        "desc_ferramenta4": "Software usado para crear música.",

        "galeria_storyboard": "Storyboards",
        "galeria_storyboards": "Storyboards",
        "galeria_cenarios": "Escenarios",
        "galeria_sprites": "Sprites",
        "galeria_codigo": "Código",
        "codigo_dica": "Pasa el ratón o toca para abrir",
        "codigo_resultado": "Resultado en el juego",

        "titulo_personagens": "Personajes",
        "titulo_principal": "Personaje Principal",

        "titulo_musica": "Banda Sonora",
        "mus1_titulo": "Música 1",
        "mus1_desc": "Tema de fondo",
        "mus2_titulo": "Música 2",
        "mus2_desc": "Tema de victoria",

        "sb1_titulo": "Storyboard 1",
        "sb1_desc": "Storyboard del primer nivel.",
        "sb2_titulo": "Storyboard 2",
        "sb2_desc": "Storyboard del segundo nivel.",
        "sb3_titulo": "Storyboard 3",
        "sb3_desc": "Storyboard del tercer nivel.",

        // Arcade Alfredo (Niveles 1, 3, 6 y 9)
        "spr1_v1_titulo": "Arcade Alfredo - Nivel 1",
        "spr1_v1_desc": "Versión inicial del arcade Alfredo.",
        "spr1_v2_titulo": "Arcade Alfredo - Nivel 3",
        "spr1_v2_desc": "Segunda evolución del arcade Alfredo.",
        "spr1_v3_titulo": "Arcade Alfredo - Nivel 6",
        "spr1_v3_desc": "Tercera evolución del arcade Alfredo.",
        "spr1_v4_titulo": "Arcade Alfredo - Nivel 9",
        "spr1_v4_desc": "Evolución máxima del arcade Alfredo.",

        // Arcade Cube (Niveles 1, 3, 6 y 9)
        "spr2_v1_titulo": "Arcade Cube - Nivel 1",
        "spr2_v1_desc": "Versión inicial del arcade Cube.",
        "spr2_v2_titulo": "Arcade Cube - Nivel 3",
        "spr2_v2_desc": "Segunda evolución del arcade Cube.",
        "spr2_v3_titulo": "Arcade Cube - Nivel 6",
        "spr2_v3_desc": "Tercera evolución del arcade Cube.",
        "spr2_v4_titulo": "Arcade Cube - Nivel 9",
        "spr2_v4_desc": "Evolución máxima del arcade Cube.",

        // Arcade Pocket (Niveles 1, 3, 6 y 9)
        "spr3_v1_titulo": "Arcade Pocket - Nivel 1",
        "spr3_v1_desc": "Versión inicial del arcade Pocket.",
        "spr3_v2_titulo": "Arcade Pocket - Nivel 3",
        "spr3_v2_desc": "Segunda evolución del arcade Pocket.",
        "spr3_v3_titulo": "Arcade Pocket - Nivel 6",
        "spr3_v3_desc": "Tercera evolución del arcade Pocket.",
        "spr3_v4_titulo": "Arcade Pocket - Nivel 9",
        "spr3_v4_desc": "Evolución máxima del arcade Pocket.",

        // Fase 2 (Mesas)
        "spr4_titulo": "Mesa de Fuentes",
        "spr4_desc": "Mesa de reparación de fuentes.",
        "spr5_titulo": "Mesa GPU",
        "spr5_desc": "Mesa de reparación de tarjetas de video.",
        "spr6_titulo": "Mesa de Disco Duro",
        "spr6_desc": "Mesa de reparación de discos duros.",

        // Fase 3 (Empresa de Tecnología)
        "spr7_titulo": "Camión de Entregas",
        "spr7_desc": "Camión encargado del transporte y entrega de equipos.",
        "spr8_titulo": "Cinta Transportadora",
        "spr8_desc": "Cinta automatizada de la línea de montaje.",

        // Escenarios
        "cen1_v1_titulo": "Escenario Fase 1 - Nivel 1",
        "cen1_v1_desc": "Inicio del Cibercafé.",
        "cen1_v2_titulo": "Escenario Fase 1 - Nivel 2",
        "cen1_v2_desc": "Primeras mejoras en el Cibercafé.",
        "cen1_v3_titulo": "Escenario Fase 1 - Nivel 3",
        "cen1_v3_desc": "Cibercafé en expansión.",
        "cen1_v4_titulo": "Escenario Fase 1 - Nivel 4",
        "cen1_v4_desc": "Cibercafé al nivel máximo.",

        "cen2_v1_titulo": "Escenario Fase 2 - Nivel 1",
        "cen2_v1_desc": "Inicio del Servicio Técnico.",
        "cen2_v2_titulo": "Escenario Fase 2 - Nivel 2",
        "cen2_v2_desc": "Mesas mejoradas en el Servicio Técnico.",
        "cen2_v3_titulo": "Escenario Fase 2 - Nivel 3",
        "cen2_v3_desc": "Servicio Técnico en expansión.",
        "cen2_v4_titulo": "Escenario Fase 2 - Nivel 4",
        "cen2_v4_desc": "Servicio Técnico al nivel máximo.",

        "cen3_titulo": "Escenario Fase 3",
        "cen3_desc": "Sede de la Empresa de Tecnología.",

        // Personajes
        "pers1_titulo": "Derrochador",
        "pers1_desc": "Cliente que gasta mucho en la tienda.",
        "pers2_titulo": "Anciano",
        "pers2_desc": "Cliente habitual del cibercafé.",
        "pers3_titulo": "Madre e Hijo",
        "pers3_desc": "Clientes que visitan el local juntos.",
        "pers4_titulo": "Ensamblador",
        "pers4_desc": "Técnico especialista en montaje de ordenadores.",
        "pers5_titulo": "Tacaño",
        "pers5_desc": "Cliente ahorrador que busca los precios más bajos.",
        "pers6_titulo": "Programador",
        "pers6_desc": "Desarrollador de la empresa de tecnología.",
        "pers7_titulo": "Recolección",
        "pers7_desc": "Encargado de la recogida y logística de equipos.",

        // Personaje Principal
        "prin1_titulo": "Protagonista - Fase 1",
        "prin1_desc": "Aspecto del protagonista al inicio de su aventura.",
        "prin2_titulo": "Protagonista - Fase 2",
        "prin2_desc": "Aspecto del protagonista en el servicio técnico.",
        "prin3_titulo": "Protagonista - Fase 3",
        "prin3_desc": "Aspecto del protagonista como dueño de la empresa de tecnología.",

        "cod1_titulo": "Código 1",
        "cod1_desc": "Fragmento del código del juego.",
        "cod2_titulo": "Código 2",
        "cod2_desc": "Fragmento del código del juego.",
        "cod3_titulo": "Código 3",
        "cod3_desc": "Fragmento del código del juego.",
        "cod4_titulo": "Código 4",
        "cod4_desc": "Fragmento del código del juego.",
        "cod5_titulo": "Código 5",
        "cod5_desc": "Fragmento del código del juego.",

        "funcao_criador1": "Programador",
        "funcao_criador2": "Programador",
        "funcao_criador3": "Escenarios y Sprites",
        "funcao_criador4": "Programador Web y Música",
        "funcao_criador5": "Escenarios y Cutscenes",

        "titulo_creditos": "Créditos",
        "desc_creditos": "¡Gracias por jugar ByteRise!",
        "btn_download": "Descargar el juego",
        "footer_direitos": "© 2026 ByteRise. Todos los derechos reservados.",
        "footer_voltar_topo": "Volver al principio",
        "docs_escolha": "Elige un archivo para abrir:",

        "doc1_nome": "Información sobre ByteRise",
        "doc1_desc": "Documento con detalles sobre el desarrollo del juego.",
        "doc2_nome": "Storyboard",
        "doc2_desc": "Bocetos originales y planificación visual.",

        "btn_download_android": "Descargar para Android (.apk)",
        "btn_download_pc": "Descargar para PC (.zip)",
        "qr_texto": "Escanea el código QR con tu móvil",
        "download_escolha": "O descarga el archivo:",
        "download_android_desc": "Para instalar directamente en un móvil Android.",
        "download_pc_desc": "Para jugar en el ordenador (descomprime el archivo).",
        "btn_jogar_web": "Jugar en el navegador (iPhone y otros)",
        "download_web_desc": "Sin instalar nada, con el enlace de GX.games."
    }
};

function trocarIdioma(idioma) {
    document.querySelectorAll("[data-i18n]").forEach(function (elemento) {
        const chave = elemento.dataset.i18n;
        if (traducoes[idioma][chave] !== undefined) {
            elemento.textContent = traducoes[idioma][chave];
        }
    });

    document.querySelectorAll(".lang button").forEach(function (b) {
        b.classList.toggle("ativo", b.dataset.lang === idioma);
    });

    document.documentElement.lang = idioma === "pt" ? "pt-BR" : idioma;
    localStorage.setItem("idioma", idioma);
}

document.querySelectorAll(".lang button").forEach(function (botaoIdioma) {
    botaoIdioma.addEventListener("click", function () {
        trocarIdioma(botaoIdioma.dataset.lang);
    });
});

let salvo = localStorage.getItem("idioma");
if (!traducoes[salvo]) {
    salvo = "pt";
}
trocarIdioma(salvo);

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitulo = document.getElementById("lightbox-titulo");
const lightboxTexto = document.getElementById("lightbox-texto");
const lightboxInfo = document.querySelector(".lightbox-info");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

let galeriaAtual = null;

function textoNoIdioma(chave) {
    if (!chave) return "";
    const idioma = localStorage.getItem("idioma") || "pt";
    const tabela = traducoes[idioma] || {};
    return tabela[chave] !== undefined ? tabela[chave] : chave;
}

function atualizarLightboxEvolucao() {
    if (!galeriaAtual) return;
    const { frames, titulos, descs, indice } = galeriaAtual;

    lightboxImg.src = frames[indice];
    const titulo = textoNoIdioma(titulos[indice]) || `Nível ${indice + 1}`;
    const texto = textoNoIdioma(descs[indice]);

    lightboxTitulo.textContent = titulo;
    lightboxTexto.textContent = texto;
    lightboxInfo.style.display = (titulo || texto) ? "" : "none";
}

function abrirLightbox(img) {
    const containerEvolucao = img.closest(".sprite-evolucao");

    lightboxImg.classList.toggle("pixelado", img.classList.contains("pixelado"));
    lightbox.classList.toggle("modo-codigo", img.classList.contains("zoom-codigo"));

    if (containerEvolucao && containerEvolucao._dadosEvolucao) {
        galeriaAtual = {
            ...containerEvolucao._dadosEvolucao,
            indice: containerEvolucao._dadosEvolucao.atual
        };
        lightbox.classList.add("tem-evolucao");
        atualizarLightboxEvolucao();
    } else {
        galeriaAtual = null;
        lightbox.classList.remove("tem-evolucao");

        const titulo = textoNoIdioma(img.dataset.titulo) || img.alt;
        const texto = textoNoIdioma(img.dataset.descricao);
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxTitulo.textContent = titulo;
        lightboxTexto.textContent = texto;
        lightboxInfo.style.display = (titulo || texto) ? "" : "none";
    }

    lightbox.classList.add("aberto");
    document.body.style.overflow = "hidden";
}

function fecharLightbox() {
    lightbox.classList.remove("aberto", "tem-evolucao");
    document.body.style.overflow = "";
    galeriaAtual = null;
}

lightboxPrev.addEventListener("click", function (e) {
    e.stopPropagation();
    if (!galeriaAtual) return;
    galeriaAtual.indice = (galeriaAtual.indice - 1 + galeriaAtual.frames.length) % galeriaAtual.frames.length;
    atualizarLightboxEvolucao();
});

lightboxNext.addEventListener("click", function (e) {
    e.stopPropagation();
    if (!galeriaAtual) return;
    galeriaAtual.indice = (galeriaAtual.indice + 1) % galeriaAtual.frames.length;
    atualizarLightboxEvolucao();
});

document.querySelectorAll(".zoom").forEach(function (img) {
    img.addEventListener("click", function () {
        abrirLightbox(img);
    });
});

lightbox.addEventListener("click", function (evento) {
    if (!evento.target.closest("#lightbox-img, .lightbox-info, .lightbox-nav")) {
        fecharLightbox();
    }
});

document.addEventListener("keydown", function (evento) {
    if (!lightbox.classList.contains("aberto")) return;
    if (evento.key === "Escape") fecharLightbox();
    if (galeriaAtual && evento.key === "ArrowRight") lightboxNext.click();
    if (galeriaAtual && evento.key === "ArrowLeft") lightboxPrev.click();
});

// Inicializa os minicarrosséis de evolução nos cards das sprites e personagens
document.querySelectorAll(".sprite-evolucao").forEach(function (box) {
    const img = box.querySelector("img");
    const lista = box.dataset.lista;
    const modelo = box.dataset.frames;
    const fps = Number(box.dataset.fps) || 1;
    const titulos = (box.dataset.titulos || "").split(",");
    const descs = (box.dataset.descs || "").split(",");

    const frames = [];
    if (lista) {
        lista.split(",").forEach(function (item) {
            const caminho = item.trim();
            frames.push(caminho);
            new Image().src = caminho;
        });
    } else if (modelo) {
        const total = Number(box.dataset.total) || 4;
        for (let i = 1; i <= total; i++) {
            const caminho = modelo.replace("{n}", i);
            frames.push(caminho);
            new Image().src = caminho;
        }
    }

    const total = frames.length;
    if (total === 0) return;

    const dados = { frames, titulos, descs, atual: 0 };
    box._dadosEvolucao = dados;

    let pausado = false;
    box.addEventListener("mouseenter", () => pausado = true);
    box.addEventListener("mouseleave", () => pausado = false);

    setInterval(function () {
        if (pausado || lightbox.classList.contains("aberto")) return;
        dados.atual = (dados.atual + 1) % total;
        img.src = frames[dados.atual];
    }, 1000 / fps);
});

const menuBtn = document.getElementById("menu-btn");
const menuLinks = document.getElementById("menu-links");

function fecharMenu() {
    menuLinks.classList.remove("aberto");
    menuBtn.textContent = "\u2630";
    menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", function () {
    const aberto = menuLinks.classList.toggle("aberto");
    menuBtn.textContent = aberto ? "\u2715" : "\u2630";
    menuBtn.setAttribute("aria-expanded", aberto ? "true" : "false");
});

menuLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 720) {
        fecharMenu();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharMenu();
    }
});

const docsModal = document.getElementById("docs-modal");
const btnDocs = document.getElementById("btn-docs");

function abrirDocs() {
    docsModal.classList.add("aberto");
    document.body.style.overflow = "hidden";
}

function fecharDocs() {
    docsModal.classList.remove("aberto");
    document.body.style.overflow = "";
}

btnDocs.addEventListener("click", abrirDocs);

docsModal.addEventListener("click", function (evento) {
    if (!evento.target.closest(".docs-painel") || evento.target.closest(".docs-fechar")) {
        fecharDocs();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharDocs();
    }
});

const downloadModal = document.getElementById("download-modal");
const btnDownload = document.getElementById("btn-download");

function abrirDownload() {
    downloadModal.classList.add("aberto");
    document.body.style.overflow = "hidden";
}

function fecharDownload() {
    downloadModal.classList.remove("aberto");
    document.body.style.overflow = "";
}

btnDownload.addEventListener("click", abrirDownload);

downloadModal.addEventListener("click", function (evento) {
    if (!evento.target.closest(".docs-painel") || evento.target.closest(".docs-fechar")) {
        fecharDownload();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharDownload();
    }
});

document.querySelectorAll(".animacao").forEach(function (img) {
    const modelo = img.dataset.frames;
    const total = Number(img.dataset.total);
    const fps = Number(img.dataset.fps) || 6;

    const frames = [];
    for (let i = 1; i <= total; i++) {
        const caminho = modelo.replace("{n}", i);
        frames.push(caminho);
        new Image().src = caminho;
    }

    let atual = 0;
    setInterval(function () {
        atual = (atual + 1) % total;
        img.src = frames[atual];
    }, 1000 / fps);
});

document.querySelectorAll(".codigo-cabeca").forEach(function (cabeca) {
    const item = cabeca.closest(".codigo-item");

    cabeca.addEventListener("click", function () {
        const aberto = item.classList.toggle("aberto");
        cabeca.setAttribute("aria-expanded", aberto ? "true" : "false");
    });
});

document.querySelectorAll(".btn-play").forEach(function (btn) {
    const audio = document.getElementById(btn.dataset.audio);
    const card = btn.closest(".musica-card");
    if (!audio) return;

    btn.addEventListener("click", function () {
        if (!audio.paused) {
            audio.pause();
            return;
        }

        document.querySelectorAll("#musica audio").forEach(function (outroAudio) {
            if (outroAudio !== audio) {
                outroAudio.pause();
                outroAudio.currentTime = 0;
            }
        });

        audio.play();
    });

    audio.addEventListener("play", function () {
        btn.textContent = "\u275A\u275A";
        card.classList.add("tocando");
    });

    audio.addEventListener("pause", function () {
        btn.textContent = "\u25B6";
        card.classList.remove("tocando");
    });

    audio.addEventListener("ended", function () {
        btn.textContent = "\u25B6";
        card.classList.remove("tocando");
    });
});