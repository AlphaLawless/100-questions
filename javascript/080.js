/*
80) Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
número (chave) e seu programa deve mostrar em que posições essa chave foi
encontrada. Mostre também quantas vezes a chave foi sorteada.
*/

const preencherAleatoriamente = (range) => {
  const arr = [];
  for (let i = 0; i < range; i++) {
    const value = Math.ceil(Math.random() * 15);
    arr.push(value);
  }
  return arr;
};

const countBy = (value, array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) count++;
  }
  return count;
};

const corrigir = (value) => {
  const arr = preencherAleatoriamente(30);
  if (arr.includes(value)) {
    console.log(arr);
    console.log(
      `A sua chave foi sorteada, a posição que ela foi encontrado foi: ${arr.indexOf(
        value
      )}\nNesta sorteio existiam outros ${countBy(value, arr)} valores iguais!`
    );
  }
};

corrigir(10);
