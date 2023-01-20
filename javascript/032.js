/*
32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
jogador vai tentar descobrir qual foi o valor sorteado.
*/

const adivinhar = (numero) => {
  const numeroSorteado = Math.ceil(Math.random() * 5);
  if (numero === numeroSorteado)
    return `Você acertou!! seu numero ${numero} e numero Sorteado ${numeroSorteado}`;
  else
    return `Você errou ;-;,seu numero ${numero} e numero Sorteado ${numeroSorteado}`;
};

console.log(adivinhar(2));
