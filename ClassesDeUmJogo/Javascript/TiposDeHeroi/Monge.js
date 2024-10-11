const Heroi = require('../Entidades/Heroi');

class Monge extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, "Monge", "artes marciais");
    }
}

module.exports = Monge;