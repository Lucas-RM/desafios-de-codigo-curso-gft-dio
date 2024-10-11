using Csharp.Entidades;

namespace Csharp.TiposDeHerois
{
    public class Monge : Heroi
    {
        public Monge(string nome, int idade) : base(nome, idade, "Monge", "artes marciais") {}
    }
}