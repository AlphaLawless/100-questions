/*
69) [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
a soma entre todos os valores da sequência.
*/

const PA = (termo, razao) => {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    const elemento = termo + (i - 1) * razao;
    console.log(`Elemento ${i}: ${elemento}`);
    total += elemento;
  }
  console.log(`Total: ${total}`);
  return total;
};

PA();
