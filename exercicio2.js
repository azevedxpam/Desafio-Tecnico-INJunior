while (true) {
  let number = Number(prompt("Digite um numero inteiro:"));

  if (
    number >= 0 &&
    Number.isInteger(number) /*garante que o numero seja inteiro*/
  ) {
    let fat = 1;
    for (let i = number; i > 0; i--) {
      fat *= i;
    }
    console.log(`Fatorial de ${number} = ${fat}`);
  } else {
    alert("Numero invalido!\n");
  }
  let continuar = prompt("Deseja tentar outro numero?[S/N]");
  if (continuar != "s" && continuar != "S") {
    console.log("programa encerrado!");
    break;
  }
}
