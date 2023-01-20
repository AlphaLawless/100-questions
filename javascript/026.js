/*
26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
- Não existe valor maior, os dois são iguais
*/

function compare(n1, n2) {
  if (n1 > n2) return `${n1} maior`;
  if (n1 < n2) return `${n2} maior`;
  return "Igual";
}

console.log(compare(5, 5));
