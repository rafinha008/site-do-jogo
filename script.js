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
        "nav_tutorial": "Tutorial",
        "nav_galeria": "Galeria",
        "nav_criadores": "Criadores",
        "nav_documentacao": "Documentação",

        "titulo_sobre": "Sobre o Jogo",
        "desc_sobre": "ByteRise é um jogo clicker para celular que conta a história de um jovem com um sonho: construir a maior lanhouse do mundo. Tudo começa de forma humilde, com poucas máquinas e quase nenhum dinheiro. A cada toque na tela, o jogador ganha recursos para investir em novos computadores, atrair mais clientes e fazer o negócio crescer. Para chegar ao topo, é preciso administrar bem o tempo, o dinheiro e os recursos, tomando decisões estratégicas pelo caminho. Com visual em pixel art, cutscenes e uma trilha sonora criada para o jogo, ByteRise transforma a jornada de um pequeno comércio em uma aventura divertida e desafiadora.",

        "titulo_ferramentas": "Ferramentas Usadas",
        "desc_ferramenta1": "Engine usada para desenvolver o jogo.",
        "desc_ferramenta2": "Software usado para criar as cutscenes e algumas sprites.",
        "desc_ferramenta3": "Software usado para criar as sprites.",
        "desc_ferramenta4": "Software usado para criar música.",

        "titulo_tutorial": "Tutorial",
        "desc_tutorial": "Em breve!",

        "titulo_galeria": "Galeria",
        "galeria_storyboard": "Storyboard",
        "galeria_sprites": "Sprites",
        "galeria_codigo": "Código",

        "sb1_titulo": "Storyboard 1",
        "sb1_desc": "Storyboard da primeira fase.",
        "sb2_titulo": "Storyboard 2",
        "sb2_desc": "Storyboard da segunda fase.",
        "sb3_titulo": "Storyboard 3",
        "sb3_desc": "Storyboard da terceira fase.",

        "spr1_titulo": "Fliperama Alfredo",
        "spr1_desc": "Sprite do fliperma Alfredo.",
        "spr2_titulo": "Fliperama Cube",
        "spr2_desc": "Sprite do fliperama Cube.",
        "spr3_titulo": "Fliperama Pocket",
        "spr3_desc": "Sprite do fliperama Pocket.",
        "spr4_titulo": "Mesa Fonte",
        "spr4_desc": "Mesa de concerto de fontes.",
        "spr5_titulo": "Mesa GPU",
        "spr5_desc": "Mesa de concerto de placas de vídeo.",
        "spr6_titulo": "Mesa HD",
        "spr6_desc": "Mesa de concerto de discos rígidos.",

        "cod1_titulo": "Código 1",
        "cod1_desc": "trecho do codigo",
        "cod2_titulo": "Código 2",
        "cod2_desc": "trecho do codigo",
        "cod3_titulo": "Código 3",
        "cod3_desc": "trecho do codigo",

        "funcao_criador1": "Programador",
        "funcao_criador2": "Programador",
        "funcao_criador3": "Cenários e Sprites",
        "funcao_criador4": "Programador Web e Músicas",
        "funcao_criador5": "Cenários e Cutscenes",

        "titulo_creditos": "Créditos",
        "desc_creditos": "Obrigado por jogar ByteRise!",
        "btn_download": "Baixar o jogo",
        "footer_direitos": "2026 ByteRise. Todos os direitos reservados.",
        "footer_voltar_topo": "Voltar ao topo",
        "docs_escolha": "Escolha um arquivo para abrir:",

        "doc1_nome": "Informações sobre o ByteRise",
        "doc1_desc": "Documento com detalhes sobre o desenvolvimento do jogo.",
        "doc2_nome": "Storyboard",
        "doc2_desc": "Esboços originais e planejamento visual."
    },

    "en": {
        "nav_inicio": "Home",
        "nav_sobre": "About",
        "nav_tutorial": "Tutorial",
        "nav_galeria": "Gallery",
        "nav_criadores": "Creators",
        "nav_documentacao": "Documentation",

        "titulo_sobre": "About the Game",
        "desc_sobre": "ByteRise is a mobile clicker game that tells the story of a young man with a dream: to build the largest LAN house in the world. It all starts humbly, with few machines and almost no money. With every tap on the screen, the player earns resources to invest in new computers, attract more customers, and make the business grow. To reach the top, you need to manage time, money, and resources well, making strategic decisions along the way. With pixel art visuals, cutscenes, and an original soundtrack, ByteRise transforms the journey of a small business into a fun and challenging adventure.",

        "titulo_ferramentas": "Tools Used",
        "desc_ferramenta1": "Engine used to develop the game.",
        "desc_ferramenta2": "Software used to create the cutscenes and some of the sprites.",
        "desc_ferramenta3": "Software used to create the sprites.",
        "desc_ferramenta4": "Software used to create music.",

        "titulo_tutorial": "Tutorial",
        "desc_tutorial": "Coming soon!",

        "titulo_galeria": "Gallery",
        "galeria_storyboard": "Storyboard",
        "galeria_sprites": "Sprites",
        "galeria_codigo": "Code",

        "sb1_titulo": "Storyboard 1",
        "sb1_desc": "Storyboard of the first level.",
        "sb2_titulo": "Storyboard 2",
        "sb2_desc": "Storyboard of the second level.",
        "sb3_titulo": "Storyboard 3",
        "sb3_desc": "Storyboard of the third level.",

        "spr1_titulo": "Alfredo Arcade",
        "spr1_desc": "Alfredo arcade sprite.",
        "spr2_titulo": "Cube Arcade",
        "spr2_desc": "Cube arcade sprite.",
        "spr3_titulo": "Pocket Arcade",
        "spr3_desc": "Pocket arcade sprite.",
        "spr4_titulo": "Power Supply Desk",
        "spr4_desc": "Power supply repair desk.",
        "spr5_titulo": "GPU Desk",
        "spr5_desc": "Graphics card repair desk.",
        "spr6_titulo": "HDD Desk",
        "spr6_desc": "Hard drive repair desk.",

        "cod1_titulo": "Code 1",
        "cod1_desc": "Code snippet",
        "cod2_titulo": "Code 2",
        "cod2_desc": "Code snippet",
        "cod3_titulo": "Code 3",
        "cod3_desc": "Code snippet",

        "funcao_criador1": "Programmer",
        "funcao_criador2": "Programmer",
        "funcao_criador3": "Scenery and Sprites",
        "funcao_criador4": "Web Developer and Music",
        "funcao_criador5": "Scenery and Cutscenes",

        "titulo_creditos": "Credits",
        "desc_creditos": "Thanks for playing ByteRise!",
        "btn_download": "Download game",
        "footer_direitos": "2026 ByteRise. All rights reserved.",
        "footer_voltar_topo": "Back to top",
        "docs_escolha": "Choose a file to open:",

        "doc1_nome": "Information about ByteRise",
        "doc1_desc": "Document with details about the game's development.",
        "doc2_nome": "Storyboard",
        "doc2_desc": "Original sketches and visual planning."
    },

    "es": {
        "nav_inicio": "Inicio",
        "nav_sobre": "Acerca de",
        "nav_tutorial": "Tutorial",
        "nav_galeria": "Galería",
        "nav_criadores": "Creadores",
        "nav_documentacao": "Documentación",

        "titulo_sobre": "Sobre el Juego",
        "desc_sobre": "ByteRise es un juego clicker para móviles que cuenta la historia de un joven con un sueño: construir el cibercafé más grande del mundo. Todo empieza de forma humilde, con pocas máquinas y casi sin dinero. Con cada toque en la pantalla, el jugador gana recursos para invertir en nuevos ordenadores, atraer más clientes y hacer crecer el negocio. Para llegar a lo más alto, es necesario administrar bien el tiempo, el dinero y los recursos, tomando decisiones estratégicas en el camino. Con gráficos en pixel art, cinemáticas y una banda sonora original, ByteRise transforma el viaje de un pequeño comercio en una aventura divertida y desafiante.",

        "titulo_ferramentas": "Herramientas Usadas",
        "desc_ferramenta1": "Motor usado para desarrollar el juego.",
        "desc_ferramenta2": "Software usado para crear las cutscenes y algunos sprites.",
        "desc_ferramenta3": "Software usado para crear los sprites.",
        "desc_ferramenta4": "Software usado para crear música.",

        "titulo_tutorial": "Tutorial",
        "desc_tutorial": "¡Próximamente!",

        "titulo_galeria": "Galería",
        "galeria_storyboard": "Storyboard",
        "galeria_sprites": "Sprites",
        "galeria_codigo": "Código",

        "sb1_titulo": "Storyboard 1",
        "sb1_desc": "Storyboard del primer nivel.",
        "sb2_titulo": "Storyboard 2",
        "sb2_desc": "Storyboard del segundo nivel.",
        "sb3_titulo": "Storyboard 3",
        "sb3_desc": "Storyboard del tercer nivel.",

        "spr1_titulo": "Arcade Alfredo",
        "spr1_desc": "Sprite del arcade Alfredo.",
        "spr2_titulo": "Arcade Cube",
        "spr2_desc": "Sprite del arcade Cube.",
        "spr3_titulo": "Arcade Pocket",
        "spr3_desc": "Sprite del arcade Pocket.",
        "spr4_titulo": "Mesa de Fuentes",
        "spr4_desc": "Mesa de reparación de fuentes.",
        "spr5_titulo": "Mesa GPU",
        "spr5_desc": "Mesa de reparación de tarjetas de video.",
        "spr6_titulo": "Mesa de Disco Duro",
        "spr6_desc": "Mesa de reparación de discos duros.",

        "cod1_titulo": "Código 1",
        "cod1_desc": "Fragmento de código",
        "cod2_titulo": "Código 2",
        "cod2_desc": "Fragmento de código",
        "cod3_titulo": "Código 3",
        "cod3_desc": "Fragmento de código",

        "funcao_criador1": "Programador",
        "funcao_criador2": "Programador",
        "funcao_criador3": "Escenarios y Sprites",
        "funcao_criador4": "Programador Web y Música",
        "funcao_criador5": "Escenarios y Cutscenes",

        "titulo_creditos": "Créditos",
        "desc_creditos": "¡Gracias por jugar ByteRise!",
        "btn_download": "Descargar el juego",
        "footer_direitos": "2026 ByteRise. Todos los derechos reservados.",
        "footer_voltar_topo": "Volver al principio",
        "docs_escolha": "Elige un archivo para abrir:",

        "doc1_nome": "Información sobre ByteRise",
        "doc1_desc": "Documento con detalles sobre el desarrollo del juego.",
        "doc2_nome": "Storyboard",
        "doc2_desc": "Bocetos originales y planificación visual."
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

function textoNoIdioma(chave) {
    if (!chave) {
        return "";
    }
    const idioma = localStorage.getItem("idioma") || "pt";
    const tabela = traducoes[idioma] || {};
    return tabela[chave] !== undefined ? tabela[chave] : chave;
}

function abrirLightbox(img) {
    const titulo = textoNoIdioma(img.dataset.titulo) || img.alt;
    const texto = textoNoIdioma(img.dataset.descricao);

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxImg.classList.toggle("pixelado", img.classList.contains("pixelado"));
    lightboxTitulo.textContent = titulo;
    lightboxTexto.textContent = texto;
    lightboxInfo.style.display = (titulo || texto) ? "" : "none";

    lightbox.classList.add("aberto");
    document.body.style.overflow = "hidden";
}

function fecharLightbox() {
    lightbox.classList.remove("aberto");
    document.body.style.overflow = "";
}

document.querySelectorAll(".zoom").forEach(function (img) {
    img.addEventListener("click", function () {
        abrirLightbox(img);
    });
});

lightbox.addEventListener("click", function (evento) {
    if (!evento.target.closest("#lightbox-img, .lightbox-info")) {
        fecharLightbox();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharLightbox();
    }
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