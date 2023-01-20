/*
46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
8 + 10 + 12 + 14 + ... + 98 + 100.
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

console.log(somaAte(6, 100, 2));
