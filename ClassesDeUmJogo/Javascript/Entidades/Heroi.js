class Heroi {
    constructor(nome, idade, tipo, ataque) {
        if (new.target === Heroi) {
            throw new Error("Não é possível instanciar a classe abstrata Heroi diretamente.");
        }

        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}.`);
    }
}

module.exports = Heroi;