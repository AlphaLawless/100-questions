/*
35) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
tabela a seguir:
- Carros populares (aluguel de R$90 por dia)
- Até 100Km percorridos: R$0,20 por Km
- Acima de 100Km percorridos: R$0,10 por Km
- Carros de luxo (aluguel de R$150 por dia)
- Até 200Km percorridos: R$0,30 por Km
- Acima de 200Km percorridos: R$0,25 por Km
*/

const precoCobrar = (tipo, diasAluguel, kms) => {
  if (tipo === "popular") {
    let totalAPagar = diasAluguel * 90;
    if (kms <= 100) totalAPagar += calcularValorKm(kms, 0.2);
    if (kms > 100) totalAPagar += calcularValorKm(kms, 0.1);
    return totalAPagar;
  }
  if (tipo === "luxo") {
    let totalAPagar = diasAluguel * 150;
    if (kms <= 200) totalAPagar += calcularValorKm(kms, 0.3);
    if (kms > 200) totalAPagar += calcularValorKm(kms, 0.25);
    return totalAPagar;
  }
  return "Esse tipo não existe";
};

const calcularValorKm = (kms, valor) => kms * valor;

console.log(precoCobrar("popular", 3, 100));
console.log(precoCobrar("popular", 3, 201));
console.log(precoCobrar("luxo", 3, 100));
console.log(precoCobrar("luxo", 3, 201));
