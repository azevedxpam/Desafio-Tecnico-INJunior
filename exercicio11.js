const quantidade = parseInt(prompt("Quantos números você deseja inserir?"));

let numeros = [];

// Coleta os números com base na quantidade informada
for (let i = 0; i < quantidade; i++) {
  let num = parseInt(prompt(`Digite o ${i + 1}º número:`));
  numeros.push(num);
}

// Conta quantos números estão em ordem crescente em relação ao anterior
let contadorCrescente = 0;
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeros[i - 1]) {
    contadorCrescente++;
  }
}

console.log(
  "Quantidade de números em ordem crescente em relação ao anterior: " +
    contadorCrescente
);
