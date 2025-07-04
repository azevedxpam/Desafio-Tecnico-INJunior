function encontrarElementoUnico(array) {
  const unico = array.filter(
    (num) => array.indexOf(num) === array.lastIndexOf(num)
  );

  if (unico.length > 0) {
    console.log("Elemento único encontrado:", unico[0]);
    return unico[0];
  } else {
    console.log("Nenhum elemento único encontrado.");
    return null;
  }
}

// Exemplo de uso
const numeros = [4, 2, 1, 5, 1, 4, 5];
encontrarElementoUnico(numeros);
