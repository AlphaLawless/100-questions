/*
47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
450 + 400 + 350 + 300 + ... + 50 + 0
*/

const encherDeNumeros = (start, end, step = 1) => {
  let arr = [];
  let length = 0;
  if (start < end) {
    length = end - start + 1;
    for (let i = 0; i < length; i += step) {
      arr.push(start + i);
    }
  } else {
    length = start - end + 1;
    for (let i = 0; i < length; i += step) {
      arr.push(start - i);
    }
  }
  return arr;
};

const somaAte = (inicio, final, step) => {
  const numeros = encherDeNumeros(inicio, final, step);

  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return total;
};

console.log(somaAte(500, 0, 50));
