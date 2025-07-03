function verificarIdades(anosPessoas) {
  let anoAtual = Number(prompt("Digite o ano atual:"));
  let quantPessoas = anosPessoas.length;
  let idadePessoas = [];

  //array para armazenar se é maior ou menor de idade
  let arrayVerificador = [];

  for (let i = 0; i < quantPessoas; i++) {
    //calculo da idade com base nos anos
    let idade = anoAtual - anosPessoas[i];
    idadePessoas[i] = idade;

    idadePessoas[i] >= 18
      ? (arrayVerificador[i] = "maior")
      : (arrayVerificador[i] = "menor");

    console.log(`Pessoa ${i + 1}: ${arrayVerificador[i]} de idade\n`);
  }

  return arrayVerificador;
}

//exemplo de uso
let anos = [1981, 2010, 2005, 2019, 2023, 1999];
verificarIdades(anos);
