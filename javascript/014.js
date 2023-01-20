/*
14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.
*/

const kmValor = (km) => {
  return km * 0.2;
};

const valorDias = (days) => {
  return days * 90;
};

const custoCarro = (days, km) => {
  const daysValue = valorDias(days);
  const kmValue = kmValor(km);

  return `Custo total = ${daysValue + kmValue}`;
};

console.log(custoCarro(8, 150));
