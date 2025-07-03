let numberInteiro = Number(prompt("Insira um número inteiro:"));

if (Number.isInteger(numberInteiro) /*garante que o numero seja inteiro*/) {
  if (numberInteiro % 3 == 0 && numberInteiro % 5 == 0) {
    console.log("fizzbuzz");
  } else if (numberInteiro % 5 == 0) {
    console.log("buzz");
  } else if (numberInteiro % 3 == 0) {
    console.log("fizz");
  }
} else {
  console.log("Número Inválido!");
}
