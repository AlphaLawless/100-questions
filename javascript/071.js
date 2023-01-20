/*
71) Faça um programa que preencha automaticamente um vetor numérico com 8
posições, conforme abaixo:
      999 999 999 999 999 999 999
index: 0   1   2   3   4   5   6
*/

const preencher = (positions, content) => {
  const arr = [];
  for (let i = 0; i < positions; i++) {
    arr[i] = content;
  }
  console.log(arr);
  return arr;
};

const arr = preencher(8, 999);
