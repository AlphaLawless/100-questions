/*
49) Crie um programa que leia 6 números inteiros e no final mostre quantos deles
são pares e quantos são ímpares.
*/

const somar = (...numeros) => {
  const numerosTotal = {
    pares: {
      total: 0,
      numeros: [],
    },
    impares: {
      total: 0,
      numeros: [],
    },
  };
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosTotal.pares.total++;
      numerosTotal.pares.numeros.push(numeros[i]);
    } else {
      numerosTotal.impares.total++;
      numerosTotal.impares.numeros.push(numeros[i]);
    }
  }
  return numerosTotal;
};

const total = somar(1, 2, 3, 2, 41, 41, 45, 15, 3, 532, 12, 312, 3123, 12);

console.log(total);
