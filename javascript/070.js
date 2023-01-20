/*
70) [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
de Fibonacci:
1 1 2 3 5 8 13 21...
*/

// const fibonacci = (range) => {
//   const sequencia = [1, 1];
//   for (let i = 0; i < range - 2; i++) {
//     sequencia.push(
//       sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]
//     );
//   }
//   console.log(sequencia);
// };

const fibonacci = (range) => {
  const sequencia = [1, 1];
  for (let i = 1; i < range - 1; i++) {
    sequencia.push(sequencia[i] + sequencia[i - 1]);
  }
  console.log(sequencia);
};

fibonacci(20);
