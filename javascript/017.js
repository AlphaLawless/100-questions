/*
17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
*/

const checkSpeed = (speed) => {
  if (speed > 80) {
    return `Foi Multado valor da multa: R$${(speed - 80) * 5}`;
  } else return "Nao Foi Mutado";
};

console.log(checkSpeed(100));
