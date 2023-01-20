/*
83) [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
números gerados e depois coloque o vetor em ordem crescente, mostrando no final
os valores ordenados.
*/

const preencherAleatoriamente = (range) => {
  const arr = [];
  for (let i = 0; i < range; i++) {
    const value = Math.ceil(Math.random() * 99);
    arr.push(value);
  }
  return arr;
};

const ordenar = (...numeros) => {
  let ordenada = [];
  let menor = 0;
  let menorI = 0;
  for (let i = 0; 0 < numeros.length; i) {
    menor = numeros[i];
    menorI = i;
    for (let b = 0; b < numeros.length; b++) {
      if (!(menor < numeros[b])) {
        menor = numeros[b];
        menorI = b;
      }
    }
    ordenada.push(menor);
    numeros.splice(menorI, 1);
  }
  return ordenada;
};

const main = () => {
  const aleatorios = preencherAleatoriamente(20);
  const ordenados = ordenar(...aleatorios);

  console.log("Aleatórios Antes: ", ...aleatorios);
  console.log("Aleatórios Depois: ", ...ordenados);
};

main();
