using Csharp.Entidades;

namespace Csharp.TiposDeHerois
{
    public class Guerreiro : Heroi
    {
        public Guerreiro(string nome, int idade) : base(nome, idade, "Guerreiro", "espada") {}
    }
}