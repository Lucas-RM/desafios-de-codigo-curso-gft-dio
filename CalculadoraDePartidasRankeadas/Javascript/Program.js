// Função para calcular o saldo de vitórias
function calculoDoSaldoDeRanqueadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para classificar o nível do herói com base no saldo de vitórias
function classificacaoDoNivelDoHeroi(vitorias) {
    const niveisDeHeroi = [
        { nome: "Ferro", min: 0, max: 10 },
        { nome: "Bronze", min: 11, max: 20 },
        { nome: "Prata", min: 21, max: 50 },
        { nome: "Ouro", min: 51, max: 80 },
        { nome: "Diamante", min: 81, max: 90 },
        { nome: "Lendário", min: 91, max: 100 },
        { nome: "Imortal", min: 101, max: null } // null representa que não há limite máximo
    ];

    let nivelDoHeroi = niveisDeHeroi[0].nome;

    for (let i = 0; i < niveisDeHeroi.length; i++) {
        let nivelAtual = niveisDeHeroi[i];

        if ((nivelAtual.max !== null && vitorias >= nivelAtual.min && vitorias <= nivelAtual.max) ||
            (nivelAtual.max === null && vitorias >= nivelAtual.min)) {
            nivelDoHeroi = nivelAtual.nome;
            break;
        }
    }

    return nivelDoHeroi;
}

// Função para exibir a mensagem final
function mensagem(saldoVitorias, nivelDoHeroi) {
    return `\nO Herói tem um saldo de ${saldoVitorias} vitórias e está no nível de ${nivelDoHeroi}`;
}

// Função para obter e validar o valor das entradas do usuário
function verificarValorValido(tipo, valor) {
    if (valor < 0) {
        console.log(`A quantidade de ${tipo} deve ser um número maior ou igual a 0!`);
        return -1;
    }

    return valor;
}

const arrayVitorias = [10, 5, 8, 15, 25, 30, 80, 90, 105, 110];
const arrayDerrotas = [20, 5, 0, 5, 5, 5, 15, 5, 10, 5];

arrayVitorias.forEach((valor, i) => {
    const vitorias = verificarValorValido('vitórias', valor);
    if (vitorias < 0) return;

    const derrotas = verificarValorValido('derrotas', arrayDerrotas[i]);
    if (derrotas < 0) return;

    const saldoVitorias = calculoDoSaldoDeRanqueadas(vitorias, derrotas);
    const nivelDoHeroi = classificacaoDoNivelDoHeroi(saldoVitorias);
    
    console.log(mensagem(saldoVitorias, nivelDoHeroi));
});

