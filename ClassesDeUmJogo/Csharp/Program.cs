using Csharp.Entidades;
using Csharp.TiposDeHerois;

Heroi[] herois = [
    new Mago("Arvandor", 150),
    new Guerreiro("Thalion", 35),
    new Monge("Lian Shen", 28),
    new Ninja("Akira", 22)
];

foreach (Heroi heroi in herois)
    heroi.Atacar();