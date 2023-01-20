/*
20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
ÍMPAR.
*/

const isPar = (number) => {
  if (number % 2 === 0) return "É par";
  else return "É impar";
};

console.log(isPar(4));
console.log(isPar(6));
console.log(isPar(7));
console.log(isPar(9));
