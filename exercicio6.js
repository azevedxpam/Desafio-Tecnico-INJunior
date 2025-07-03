function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Solicita ao usuário um número inteiro positivo
let n = parseInt(
  prompt("Digite o número de termos da sequência de Fibonacci:")
);

if (isNaN(n) || n < 1) {
  console.log("Por favor, digite um número inteiro positivo.");
} else {
  console.log(`Os ${n} primeiros termos da sequência de Fibonacci são:`);
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}
