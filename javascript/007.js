/*
7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
sua terça parte.
Ex:
Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666
*/

const calc = (value) => {
  console.log(`O dobro de ${value} é ${value * 2}`);
  console.log(`A terça parte de ${value} é ${(value / 3).toFixed(4)}`);
};

calc(3.5);
