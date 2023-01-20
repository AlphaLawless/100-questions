/*
36) Um programa de vida saudável quer dar pontos atividades físicas que podem
ser trocados por dinheiro. O sistema funciona assim:
- Cada hora de atividade física no mês vale pontos
- até 10h de atividade no mês: ganha 2 pontos por hora
- de 10h até 20h de atividade no mês: ganha 5 pontos por hora
- acima de 20h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

const calcularPontos = (horas, pontoHora) => {
  return horas * pontoHora;
};

const calcularGanho = (pontos) => {
  return pontos * 0.05;
};

const ganhar = (horas) => {
  let pontos = 0;
  if (horas < 10) pontos += calcularPontos(horas, 2);
  if (horas >= 10 && horas < 20) pontos += calcularPontos(horas, 5);
  if (horas >= 20) pontos += calcularPontos(horas, 10);
  const ganho = calcularGanho(pontos);
  return ganho;
};

console.log(ganhar(40));
console.log(ganhar(20));
console.log(ganhar(10));
console.log(ganhar(15));
