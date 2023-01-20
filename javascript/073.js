/*
73) Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
       9 8 7 6 5 4 3 2 1 0
index: 0 1 2 3 4 5 6 7 8 9
*/

const preencher = (positions, start, razao) => {
  const arr = [];

  for (let i = 1; i <= positions; i++) {
    const prox = start + (i - 1) * razao;
    arr.push(prox);
  }
  return arr;
};

const arr = preencher(10, 9, -1);

console.log(...arr);
