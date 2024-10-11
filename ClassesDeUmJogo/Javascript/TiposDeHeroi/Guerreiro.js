const Heroi = require('../Entidades/Heroi');

class Guerreiro extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, "Guerreiro", "espada");
    }
}

module.exports = Guerreiro;