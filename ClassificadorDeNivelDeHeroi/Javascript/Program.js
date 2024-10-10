function determinarNivelDoHeroi(nomeDoHeroi, quantidadeDeXp) {
    if (isNaN(quantidadeDeXp) || quantidadeDeXp < 0) {
        console.log("Quantidade de XP tem que ser maior ou igual a 0!");
        return;
    }

    const niveisDeHeroi = [
        { nome: "Ferro", min: 0, max: 1000 },
        { nome: "Bronze", min: 1001, max: 2000 },
        { nome: "Prata", min: 2001, max: 5000 },
        { nome: "Ouro", min: 5001, max: 7000 },
        { nome: "Platina", min: 7001, max: 8000 },
        { nome: "Ascendente", min: 8001, max: 9000 },
        { nome: "Imortal", min: 9001, max: 10000 },
        { nome: "Radiante", min: 10001, max: null } // null representa que não há limite máximo
    ];

    let nivelDoHeroi = "";

    for (let i = 0; i < niveisDeHeroi.length; i++) {
        let nivelAtual = niveisDeHeroi[i];

        // Verifica se o XP está no intervalo correto
        if ((nivelAtual.max !== null && quantidadeDeXp >= nivelAtual.min && quantidadeDeXp <= nivelAtual.max) ||
            (nivelAtual.max === null && quantidadeDeXp >= nivelAtual.min)) {
            nivelDoHeroi = nivelAtual.nome;
            break;
        }
    }

    if (nivelDoHeroi)
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
    else
        console.log("Nível do herói não encontrado.");
}

const valoresDeQuantidadeDeXp = [500, 1500, 3000, 6000, 7500, 8500, 9500, 10500];

valoresDeQuantidadeDeXp.forEach(valor => {
    determinarNivelDoHeroi('Superman', valor);
});