/*
79) Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
No final, mostre quais são os números pares que foram digitados e em que
posições eles estão armazenados.
*/

const isPar = (...values) => {
  const pares = [];
  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    if (element % 2 === 0) pares.push(`[${element} - Position: ${i}]`);
  }
  console.log(pares);
  return pares;
};

isPar(
  ...[
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
    44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 63, 64, 65, 66,
    70, 71, 72, 73, 74, 75, 7679, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99,
  ]
);
