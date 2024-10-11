const Heroi = require('../Entidades/Heroi');

class Ninja extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, "Ninja", "shuriken");
    }
}

module.exports = Ninja;