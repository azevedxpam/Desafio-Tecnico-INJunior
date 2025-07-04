// Array para armazenar os jogadores
let time = [];

// Função para adicionar jogador
function adicionarJogador(nome, idade, posicao, pontuacao) {
  const jogador = {
    nome: nome,
    idade: idade,
    posicao: posicao,
    pontuacao: pontuacao,
  };
  time.push(jogador);
  alert("Jogador adicionado com sucesso!");
}

// Função para buscar jogadores por posição
function buscarPorPosicao(posicao) {
  const encontrados = time.filter(
    (jogador) => jogador.posicao.toLowerCase() === posicao.toLowerCase()
  );
  if (encontrados.length > 0) {
    let resultado = "Jogadores na posição '" + posicao + "':\n";
    encontrados.forEach((j) => {
      resultado += `- ${j.nome}, ${j.idade} anos, Pontuação: ${j.pontuacao}\n`;
    });
    alert(resultado);
  } else {
    alert("Nenhum jogador encontrado na posição '" + posicao + "'.");
  }
}

// Função para listar todos os jogadores do time
function listarTime() {
  if (time.length === 0) {
    alert("Nenhum jogador cadastrado.");
    return;
  }

  let lista = "Jogadores cadastrados:\n";
  time.forEach((j) => {
    lista += `- ${j.nome}, ${j.idade} anos, Posição: ${j.posicao}, Pontuação: ${j.pontuacao}\n`;
  });
  alert(lista);
}

// Função para calcular a pontuação média
function calcularPontuacaoMedia() {
  if (time.length === 0) {
    alert("Nenhum jogador cadastrado para calcular média.");
    return;
  }

  const soma = time.reduce((total, jogador) => total + jogador.pontuacao, 0);
  const media = soma / time.length;
  alert("Pontuação média do time: " + media.toFixed(2));
}

// Menu interativo
function menu() {
  let opcao;
  do {
    opcao = prompt(
      " MENU TIME DE ESPORTES \n" +
        "1 - Adicionar jogador\n" +
        "2 - Buscar por posição\n" +
        "3 - Listar time\n" +
        "4 - Calcular pontuação média\n" +
        "5 - Sair\n\n" +
        "Escolha uma opção:"
    );

    switch (opcao) {
      case "1":
        const nome = prompt("Digite o nome do jogador:");
        const idade = parseInt(prompt("Digite a idade do jogador:"));
        const posicao = prompt("Digite a posição do jogador:");
        const pontuacao = parseInt(prompt("Digite a pontuação do jogador:"));
        if (nome && !isNaN(idade) && posicao && !isNaN(pontuacao)) {
          adicionarJogador(nome, idade, posicao, pontuacao);
        } else {
          alert("Dados inválidos. Tente novamente.");
        }
        break;

      case "2":
        const pos = prompt("Digite a posição para buscar:");
        if (pos) {
          buscarPorPosicao(pos);
        } else {
          alert("Posição inválida.");
        }
        break;

      case "3":
        listarTime();
        break;

      case "4":
        calcularPontuacaoMedia();
        break;

      case "5":
        alert("Encerrando o programa. Até logo!");
        break;

      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (opcao !== "5");
}

// Inicia o menu
menu();
