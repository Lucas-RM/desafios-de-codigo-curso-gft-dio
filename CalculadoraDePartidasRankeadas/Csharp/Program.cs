class Program
{
    // Função para calcular o saldo de vitórias
    static int CalculoDoSaldoDeRanqueadas(int vitorias, int derrotas) 
    {
        return vitorias - derrotas;
    }

    // Função para classificar o nível do herói com base no saldo de vitórias
    static string ClassificacaoDoNivelDoHeroi(int vitorias) 
    {
        string[,] niveisDeHeroi = {
            {"Ferro", "0", "10"},
            {"Bronze", "11", "20"},
            {"Prata", "21", "50"},
            {"Ouro", "51", "80"},
            {"Diamante", "81", "90"},
            {"Lendário", "91", "100"},
            {"Imortal", "101", ""} // "" representa que não há limite máximo
        };

        string nivelDoHeroi = niveisDeHeroi[0, 0];

        for (int i = 0; i < niveisDeHeroi.GetLength(0); i++)
        {
            int.TryParse(niveisDeHeroi[i, 1], out int vitoriasMinima);
            bool temVitoriasMaxima = int.TryParse(niveisDeHeroi[i, 2], out int vitoriasMaxima);

            // Verifica se as vitórias estão no intervalo correto
            if ((temVitoriasMaxima && vitorias >= vitoriasMinima && vitorias <= vitoriasMaxima) ||
                (!temVitoriasMaxima && vitorias >= vitoriasMinima))
            {
                nivelDoHeroi = niveisDeHeroi[i, 0];
                break;
            }
        }

        return nivelDoHeroi;
    }

    static string Mensagem(int saldoVitorias, string nivelDoHeroi)
    {
        return $"\nO Herói tem de saldo de {saldoVitorias} está no nível de {nivelDoHeroi}";
    }

    // Função auxiliar para obter e validar a entrada de dados
    static int ObterValorValido(string tipo)
    {
        Console.Write($"Digite o número de {tipo}: ");

        if (!int.TryParse(Console.ReadLine(), out int valor) || valor < 0)
        {
            Console.WriteLine($"A quantidade de {tipo} deve ser um número maior ou igual a 0!");
            return -1;
        }

        return valor;
    }

    static void Main(string[] args)
    {
        int vitorias = ObterValorValido("vitórias");
        if (vitorias < 0) return;

        int derrotas = ObterValorValido("derrotas");
        if (derrotas < 0) return;

        int saldoVitorias = CalculoDoSaldoDeRanqueadas(vitorias, derrotas);
        string nivelDoHeroi = ClassificacaoDoNivelDoHeroi(saldoVitorias);

        Console.WriteLine(Mensagem(saldoVitorias, nivelDoHeroi));
    }
}