const Heroi = require('../Entidades/Heroi');

class Mago extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, "Mago", "magia");
    }
}

module.exports = Mago;