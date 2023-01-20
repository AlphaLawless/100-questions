/*
6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
sucessor.
Ex:
Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10
*/

const antecessor = (value) => {
  console.log(`O antecessor de ${value} é ${value - 1}`);
  console.log(`O sucessor de ${value} é ${value + 1}`);
};

antecessor(9);
