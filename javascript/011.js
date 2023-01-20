/*
11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
segundo grau e mostre o valor de Delta.
*/

const delta = (a, b, c) => {
  const calc = b ** 2 - 4 * a * c;
  return calc;
};

console.log(delta(1, -4, 3));
