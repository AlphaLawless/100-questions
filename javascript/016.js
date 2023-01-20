/*
16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias.
*/

const calcularVida = (cigarrosPerDay, anos) => {
  const cigarrosPerYear = 365 * cigarrosPerDay * anos;
  const minutos = cigarrosPerYear * 10;
  const lifeTime = (minutos / (24 * 60)).toFixed(1);
  console.log(`O fumante perderá: ${lifeTime} dias de vida`);
  return lifeTime;
};

calcularVida(1, 1);
