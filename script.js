let servicos = [
    { nome: "IPTV COMPLETO", preco:27 },
    { nome: "CLARO TV COMPLETA 1", preco:20 },
    { nome: "CLARO TV COMPLETA 2", preco:30 },
    { nome: "DUOLINGO", preco:10 },
    { nome: "GLOBO PLAY PREMIUM 1", preco:6 },
    { nome: "GLOBO PREMIUM 2", preco:14 },
    { nome: "GLOBO PREMIUM 3", preco:12 },
    { nome: "GLOBO PREMIUM 4", preco:20 },
    { nome: "YOUTUBE PREMIUM", preco:8 },
    { nome: "PICSART", preco:10 },
    { nome: "PREMIER+TELECINE", preco:12 },
    { nome: "CANVA PRO", preco:5 },
    { nome: "CLARO TV COMPLETA", preco:25 },
    { nome: "TELA CRUNCHYROLL", preco:8},
    { nome: "DISNEY PREMIUM 1", preco:20 },
    { nome: "DISNEY PREMIUM 2", preco:27 },
    { nome: "TELA HBO MAX 2M", preco:12 },
    { nome: "HBO MAX COMPLETO", preco:19 },
    { nome: "TELA NETFLIX S/P", preco:9 },
    { nome: "TELA NETFLIX 4K", preco:18 },
    { nome: "NETFLIX PREMIUM", preco:45 },
    { nome: "TELA PARAMOUNT", preco:9 },
    { nome: "TELA VIKI PLUS", preco:8 },
    { nome: "XBOX GAME PASS", preco:35 }
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
