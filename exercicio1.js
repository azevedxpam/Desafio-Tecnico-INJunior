let a = Number(prompt("Digite um número para A"));
let b = Number(prompt("Digite um número para B"));
let c = Number(prompt("Digite um número para C"));

//calculo do delta
let delta = b ** 2 - 4 * a * c;

let raizQuadrada;

//raizes
if (delta > 0) {
  raizQuadrada = Math.sqrt(delta);
  let x1 = (-b + raizQuadrada) / (2 * a);
  let x2 = (-b - raizQuadrada) / (2 * a);
  console.log(`Possui duas raizes, x1 = ${x1} e x2 = ${x2}`);
} else if (delta == 0) {
  let x = -b / (2 * a);
  console.log(`Possui uma raiz(raiz dupla), x = ${x}`);
} else {
  console.log("Não possui raizes reais");
}
