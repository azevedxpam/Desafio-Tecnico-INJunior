const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fila = [];

function exibirMenu() {
  console.log("\n--- Central de Atendimento ---");
  if (fila.length === 0) {
    console.log("Nenhum cliente na fila.");
  } else {
    console.log("Clientes na fila:");
    fila.forEach((cliente, index) => {
      console.log(`${index + 1}º ${cliente}`);
    });
  }

  console.log("\nEscolha uma opção:");
  console.log("1 - Novo Cliente");
  console.log("2 - Atender Cliente");
  console.log("3 - Sair");

  rl.question("Opção: ", (opcao) => {
    switch (opcao.trim()) {
      case "1":
        adicionarCliente();
        break;
      case "2":
        atenderCliente();
        break;
      case "3":
        console.log("Encerrando programa...");
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        exibirMenu();
        break;
    }
  });
}

function adicionarCliente() {
  rl.question("Digite o nome do cliente: ", (nome) => {
    if (nome.trim() === "") {
      console.log("Nome inválido. Tente novamente.");
    } else {
      fila.push(nome.trim());
      console.log(`${nome.trim()} foi adicionado à fila.`);
    }
    exibirMenu();
  });
}

function atenderCliente() {
  if (fila.length === 0) {
    console.log("Nenhum cliente para atender.");
  } else {
    const atendido = fila.shift();
    console.log(`Atendendo cliente: ${atendido}`);
  }
  exibirMenu();
}

// Início do programa
exibirMenu();
