/*
24) Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
viagens até 200Km e R$0.45 para viagens mais longas.
*/

const passagemValor = (distancia) => {
  if (distancia <= 200) return distancia * 0.5;
  return distancia * 0.45;
};

console.log(passagemValor(200));
console.log(passagemValor(201));
