// 1. Solicita ao usuário uma frase
let frase = prompt("Digite uma frase para verificar se é um palíndromo:");

// 2. Remove espaços e converte para minúsculas
let fraseFormatada = frase.replace(/\s+/g, "").toLowerCase();

// 3. Verifica se é igual ao contrário
let fraseInvertida = fraseFormatada.split("").reverse().join("");

if (fraseFormatada === fraseInvertida) {
  alert("É um palíndromo!");
} else {
  alert("Não é um palíndromo.");
}
