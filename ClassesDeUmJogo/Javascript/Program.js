const Mago = require("./TiposDeHeroi/Mago");
const Guerreiro = require("./TiposDeHeroi/Guerreiro");
const Monge = require("./TiposDeHeroi/Monge");
const Ninja = require("./TiposDeHeroi/Ninja");

const herois = [
    new Mago("Arvandor", 150),
    new Guerreiro("Thalion", 35),
    new Monge("Lian Shen", 28),
    new Ninja("Akira", 22)
];

herois.forEach(heroi => heroi.atacar());