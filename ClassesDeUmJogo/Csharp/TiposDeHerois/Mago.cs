using Csharp.Entidades;

namespace Csharp.TiposDeHerois
{
    public class Mago : Heroi
    {
        public Mago(string nome, int idade) : base(nome, idade, "Mago", "magia") {}
    }
}