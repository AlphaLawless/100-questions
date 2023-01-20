/*
12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto.
*/

const desconto = (value) => {
  const valorPromocao = (value -= value * 0.05);
  console.log(`O valor do produto com a promoção é ${valorPromocao}`);
  return valorPromocao;
};

desconto(100);
