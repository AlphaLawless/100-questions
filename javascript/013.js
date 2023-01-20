/*
13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento.
*/

const aumento = (value) => {
  const aumento = value + value * 0.15;
  console.log(`O novo salario saiu de ${value} para ${aumento}`);
};

aumento(1000);
