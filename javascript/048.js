/*
48) Faça um programa que leia 7 números inteiros e no final mostre o somatório
entre eles.
*/
const somar = (...numeros) => {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return total;
};

console.log(somar(1, 1, 1, 1, 1, 1, 2));
