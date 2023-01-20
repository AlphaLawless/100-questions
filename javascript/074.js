/*
74) Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
       5 3 5 3 5 3 5 3 5 3
index: 0 1 2 3 4 5 6 7 8 9
*/

const preencher = (positions, ...paterns) => {
  const arr = [];
  while (positions > 0) {
    for (let i = 0; i < paterns.length; i++) {
      if (positions > 0) {
        arr.push(paterns[i]);
        positions--;
      }
    }
  }
  return arr;
};

const arr = preencher(10, 5, 3);

console.log(...arr);
