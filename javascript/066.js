/*
66) Escreva um programa que leia um número qualquer e mostre a tabuada desse
número, usando a estrutura “para”.
Ex: Digite um valor: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15 ...
*/

const tabula = (num) => {
  for (let i = 0; i <= 10; i++) {
    const template = `${num} x ${i} = ${num * i}`;
    console.log(template);
  }
  return null;
};

tabula(2);
