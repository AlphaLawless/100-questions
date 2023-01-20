/*
9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
*/

const realInDolar = (value) => {
  return value / 3.45;
};

console.log(realInDolar(6.9));
