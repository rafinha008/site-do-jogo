// troca-tema.js
const botao = document.getElementById("troca-tema");

// icone do botao: lua no tema claro (clica pra escurecer) e sol no tema escuro
// o \uFE0E obriga o sol a aparecer como simbolo e nao como emoji colorido
function atualizarIcone() {
    if (document.body.classList.contains("dark-theme")) {
        botao.textContent = "\u2600\uFE0E";
        botao.setAttribute("aria-label", "Mudar para o tema claro");
    } else {
        botao.textContent = "\u263E";
        botao.setAttribute("aria-label", "Mudar para o tema escuro");
    }
}

// quando abrir a pagina usa o tema guardado
if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("dark-theme");
}
atualizarIcone();

botao.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    // guarda o tema pra continuar o mesmo nas outras paginas
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }

    atualizarIcone();
});


// botoes do carousel
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const cards = document.querySelectorAll(".card");
const carousel = document.querySelector(".carousel");
let currentIndex = 0;
let timer;

// so roda se a pagina tiver o carrossel (a galeria nao tem)
if (carousel) {

    // decide a posicao de cada card (esquerda, centro, direita ou oculto)
    function showCard(index) {
        const total = cards.length;

        cards.forEach(function (card, i) {
            // distancia ate o card do centro, o % faz o carrossel dar a volta
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

    // botao de avançar
    function avancar() {
        currentIndex++;
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }
        showCard(currentIndex);
    }

    // botao de voltar
    function voltar() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }
        showCard(currentIndex);
    }

    // troca automaticamente a cada 4 segundos
    // (clearInterval reinicia a contagem quando alguem clica nas setas)
    function iniciarAutoplay() {
        clearInterval(timer);
        timer = setInterval(avancar, 4000);
    }

    next.addEventListener("click", function () {
        avancar();
        iniciarAutoplay();
    });

    prev.addEventListener("click", function () {
        voltar();
        iniciarAutoplay();
    });

    // arrastar com o dedo no celular
    let toqueInicio = 0;

    carousel.addEventListener("touchstart", function (evento) {
        toqueInicio = evento.touches[0].clientX;
    }, { passive: true });

    carousel.addEventListener("touchend", function (evento) {
        // diferenca entre onde o dedo saiu e onde terminou
        const diferenca = evento.changedTouches[0].clientX - toqueInicio;

        // so conta se arrastou mais de 40px
        if (Math.abs(diferenca) > 40) {
            if (diferenca < 0) {
                avancar();
            } else {
                voltar();
            }
            iniciarAutoplay();
        }
    });

    // mostra os cards na posicao certa assim que a pagina abre
    showCard(0);
    iniciarAutoplay();
}

// traduções
const traducoes = {
    "pt": {
        "nav_inicio": "Início",
        "nav_sobre": "Sobre",
        "nav_criadores": "Criadores",
        "nav_tutorial": "Tutorial",
        "nav_galeria": "Galeria",
        "titulo_sobre": "Sobre o Jogo",
        "desc_sobre": "A história do jogo envolve um jovem que busca criar uma lanhouse. Ele começa pequeno, sem muitos recursos ou máquinas, mas com o tempo vai crescendo e conseguindo mais clientes, máquinas e recursos. O objetivo do jogo é conseguir criar a maior lanhouse do mundo, com o maior número de clientes e máquinas. O jogador deve gerenciar o tempo, o dinheiro e os recursos para atingir esse objetivo. O jogo é divertido e desafiador, e exige que o jogador tome decisões estratégicas para crescer e se tornar o melhor dono de lanhouse do mundo.",
        "funcao_criador1": "Programador",
        "funcao_criador2": "Programador",
        "funcao_criador3": "Cenário e Sprites",
        "funcao_criador4": "Programador Web e Músicas",
        "funcao_criador5": "Cenários e Cutsceness",
        "footer_direitos": "2026 ByteRise. Todos os direitos reservados.",
        "footer_voltar_topo": "Voltar ao topo",
        "titulo_ferramentas": "Ferramentas Usadas",
        "titulo_creditos": "Créditos",
        "desc_creditos": "Obrigado por jogar ByteRise!",
        "titulo_galeria": "Galeria",
        "galeria_sprites": "Sprites",
        "galeria_codigo": "Código",
        "nav_download": "Download",
        "btn_download": "Baixar o jogo",
        "desc_ferramenta1": "Engine usada para desenvolver o jogo.",
        "desc_ferramenta2": "Descrição da Ferramenta 2.",
        "desc_ferramenta3": "Descrição da Ferramenta 3.",
        "desc_ferramenta4": "Software usado para criar música.",
    },

    "en": {
        "nav_inicio": "Home",
        "nav_sobre": "About",
        "nav_criadores": "Creators",
        "nav_tutorial": "Tutorial",
        "nav_galeria": "Gallery",
        "titulo_sobre": "About the Game",
        "desc_sobre": "The game's story follows a young man who wants to open an internet café (a LAN house). He starts small, with few resources and few machines, but over time he grows, gaining more customers, machines and resources. The goal of the game is to build the biggest internet café in the world, with the most customers and machines. The player must manage time, money and resources to reach this goal. The game is fun and challenging, and requires the player to make strategic decisions to grow and become the best internet café owner in the world.",
        "funcao_criador1": "Description of Creator 1.",
        "funcao_criador2": "Description of Creator 2.",
        "funcao_criador3": "Description of Creator 3.",
        "funcao_criador4": "Description of Creator 4.",
        "funcao_criador5": "Description of Creator 5.",
        "footer_direitos": "2026 ByteRise. All rights reserved.",
        "footer_voltar_topo": "Back to top",
        "titulo_ferramentas": "Tools Used",
        "titulo_creditos": "Credits",
        "desc_creditos": "Thanks for playing ByteRise!",
        "titulo_galeria": "Gallery",
        "galeria_sprites": "Sprites",
        "galeria_codigo": "Code",
        "nav_download": "Download",
        "btn_download": "Download game",
        "desc_ferramenta1": "Engine used to develop the game.",
        "desc_ferramenta2": "Description of Tool 2.",
        "desc_ferramenta3": "Description of Tool 3.",
        "desc_ferramenta4": "Software used to create music.",
    },

    "es": {
        "nav_inicio": "Inicio",
        "nav_sobre": "Acerca de",
        "nav_criadores": "Creadores",
        "nav_tutorial": "Tutorial",
        "nav_galeria": "Galería",
        "titulo_sobre": "Sobre el Juego",
        "desc_sobre": "La historia del juego trata de un joven que quiere abrir un cibercafé (una LAN house). Empieza poco a poco, con pocos recursos y pocas máquinas, pero con el tiempo va creciendo y consiguiendo más clientes, máquinas y recursos. El objetivo del juego es crear el cibercafé más grande del mundo, con el mayor número de clientes y máquinas. El jugador debe administrar el tiempo, el dinero y los recursos para alcanzar ese objetivo. El juego es divertido y desafiante, y exige que el jugador tome decisiones estratégicas para crecer y convertirse en el mejor dueño de cibercafé del mundo.",
        "funcao_criador1": "Descripción del Creador 1.",
        "funcao_criador2": "Descripción del Creador 2.",
        "funcao_criador3": "Descripción del Creador 3.",
        "funcao_criador4": "Descripción del Creador 4.",
        "funcao_criador5": "Descripción del Creador 5.",
        "footer_direitos": "2026 ByteRise. Todos los derechos reservados.",
        "footer_voltar_topo": "Volver al principio",
        "titulo_ferramentas": "Herramientas Usadas",
        "titulo_creditos": "Créditos",
        "desc_creditos": "¡Gracias por jugar ByteRise!",
        "titulo_galeria": "Galería",
        "galeria_sprites": "Sprites",
        "galeria_codigo": "Código",
        "nav_download": "Descarga",
        "btn_download": "Descargar el juego",
        "desc_ferramenta1": "Motor usado para desarrollar el juego.",
        "desc_ferramenta2": "Descripción de la Herramienta 2.",
        "desc_ferramenta3": "Descripción de la Herramienta 3.",
        "desc_ferramenta4": "Software usado para crear música.",
    }
};

function trocarIdioma(idioma) {
    document.querySelectorAll("[data-i18n]").forEach(function (elemento) {
        const chave = elemento.dataset.i18n;

        // se a chave nao existir nas traducoes, deixa o texto que ja esta no HTML
        if (traducoes[idioma][chave] !== undefined) {
            elemento.textContent = traducoes[idioma][chave];
        }
    });

    // avisa o navegador qual e o idioma da pagina
    document.documentElement.lang = idioma === "pt" ? "pt-BR" : idioma;
    localStorage.setItem("idioma", idioma);
}

document.querySelectorAll(".lang button").forEach(function (botaoIdioma) {
    botaoIdioma.addEventListener("click", function () {
        trocarIdioma(botaoIdioma.dataset.lang);
    });
});

// quando abrir a pagina pega a lingua guardada (ou português na primeira visita)
let salvo = localStorage.getItem("idioma");
if (!traducoes[salvo]) {
    salvo = "pt";
}
trocarIdioma(salvo);