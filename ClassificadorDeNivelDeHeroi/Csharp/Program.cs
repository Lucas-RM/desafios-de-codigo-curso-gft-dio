string nomeDoHeroi = Console.ReadLine() ?? "";

if (!int.TryParse(Console.ReadLine(), out int quantidadeDeXp) || quantidadeDeXp < 0)
{
    Console.WriteLine("Quantidade de XP tem que ser maior ou igual a 0!");
    return;
}

string[,] niveisDeHeroi = {
        {"Ferro", "0", "1000"},
        {"Bronze", "1001", "2000"},
        {"Prata", "2001", "5000"},
        {"Ouro", "5001", "7000"},
        {"Platina", "7001", "8000"},
        {"Ascendente", "8001", "9000"},
        {"Imortal", "9001", "10000"},
        {"Radiante", "10001", ""} // "" representa que não há limite máximo
    };

string nivelDoHeroi = "";

for (int i = 0; i < niveisDeHeroi.GetLength(0); i++)
{
    int.TryParse(niveisDeHeroi[i, 1], out int xpMinimo);
    bool temXpMaximo = int.TryParse(niveisDeHeroi[i, 2], out int xpMaximo);

    // Verifica se o XP está no intervalo correto
    if ((temXpMaximo && quantidadeDeXp >= xpMinimo && quantidadeDeXp <= xpMaximo) ||
        (!temXpMaximo && quantidadeDeXp >= xpMinimo))
    {
        nivelDoHeroi = niveisDeHeroi[i, 0];
        break;
    }
}

if (!string.IsNullOrEmpty(nivelDoHeroi))
    Console.WriteLine($"O Herói de nome {nomeDoHeroi} está no nível de {nivelDoHeroi}");
else
    Console.WriteLine("Nível do herói não encontrado.");
