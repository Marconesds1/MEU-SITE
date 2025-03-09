let servicos = [
    { nome: "IPTV COMPLETO", preco: 27 },
    { nome: "NETFLIX", preco: 45 },
    { nome: "TELA NETFLIX 4K", preco: 18 },
    { nome: "TELA DISNEY", preco: 20 },
    { nome: "GLOBO PLAY PREMIUM", preco: 12 },
    { nome: "CLARO TV COMPLETA", preco: 30 },
    { nome: "CANVA PRO", preco: 5 },
    { nome: "TELA HBO MAX", preco: 12 },
    { nome: "YOUTUBE PREMIUM", preco: 8 },
    { nome: "SPOTIFY PREMIUM", preco: 10 },
    { nome: "AMAZON PRIME", preco: 15 },
    { nome: "DISNEY+ PREMIUM", preco: 22 },
    { nome: "HBO MAX PREMIUM", preco: 25 },
    { nome: "DEEZER PREMIUM", preco: 12 },
    { nome: "TIDAL HIFI", preco: 18 },
    { nome: "PARAMOUNT+", preco: 20 },
    { nome: "APPLE MUSIC", preco: 17 },
    { nome: "STAR+", preco: 21 },
    { nome: "PLAYSTATION PLUS", preco: 40 },
    { nome: "XBOX GAME PASS", preco: 35 },
    { nome: "CRUNCHYROLL", preco: 15 },
    { nome: "STEAM GIFT CARD", preco: 50 },
    { nome: "GOOGLE DRIVE 2TB", preco: 25 },
    { nome: "OFFICE 365", preco: 30 }
];

function carregarServicos() {
    let lista = document.querySelector(".lista-servicos");
    lista.innerHTML = "";

    servicos.forEach((servico) => {
        let div = document.createElement("div");
        div.classList.add("servico");

        let h3 = document.createElement("h3");
        h3.innerText = servico.nome;

        let pPreco = document.createElement("p");
        pPreco.innerText = `R$ ${servico.preco},00`;

        let botao = document.createElement("button");
        botao.innerText = "Comprar";
        botao.onclick = () => comprarServico(servico.nome, servico.preco);

        div.appendChild(h3);
        div.appendChild(pPreco);
        div.appendChild(botao);

        lista.appendChild(div);
    });
}

function comprarServico(nome, preco) {
    let mensagem = `Olá, gostaria de comprar o serviço:\n\n${nome} - R$ ${preco},00`;
    let whatsapp = `https://wa.me/5598991711256?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsapp, "_blank");
}

function contatarSuporte() {
    let mensagem = "Olá, preciso de suporte técnico.";
    let whatsapp = `https://wa.me/5598991711256?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsapp, "_blank");
}

window.onload = carregarServicos;