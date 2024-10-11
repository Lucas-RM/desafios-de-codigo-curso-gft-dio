using Csharp.Entidades;

namespace Csharp.TiposDeHerois
{
    public class Ninja : Heroi
    {
        public Ninja(string nome, int idade) : base(nome, idade, "Ninja", "shuriken") {}
    }
}