/*
21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO.
*/

const isBissexto = (ano) => {
  if (ano % 4 === 0) return "É BISSEXTO";
  else return "Não é BISSEXTO";
};

console.log(isBissexto(2002));
console.log(isBissexto(1988));
console.log(isBissexto(1996));
console.log(isBissexto(2005));
console.log(isBissexto(2000));
