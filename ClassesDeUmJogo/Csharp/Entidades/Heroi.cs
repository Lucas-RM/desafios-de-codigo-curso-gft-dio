namespace Csharp.Entidades
{
    public abstract class Heroi
    {
        public string Nome { get; } = default!;
        public int Idade { get; } = default!;
        public string Tipo { get; } = default!;
        public string Ataque { get; } = default!;

        public Heroi(string nome, int idade, string tipo, string ataque)
        {
            Nome = nome;
            Idade = idade;
            Tipo = tipo;
            Ataque = ataque;
        }

        public void Atacar() {
            Console.WriteLine($"O {Tipo} atacou usando {Ataque}.");
        }
    }
}