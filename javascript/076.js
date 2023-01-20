/*
76) Crie um programa que preencha automaticamente um vetor numérico com 7
números gerados aleatoriamente pelo computador e depois mostre os valores
gerados na tela.
*/

const preencherAleatoriamente = (range) => {
  const arr = [];
  for (let i = 0; i < range; i++) {
    const value = Math.ceil(Math.random() * 100);
    arr.push(value);
  }
  console.log(...arr);
  return arr;
};

preencherAleatoriamente(7);
