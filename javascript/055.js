/*
55) [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de
agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
tentativas para tentar acertar.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const adivinhar = () => {
  let tentativas = 4;
  console.log("Coloque um numero entre 1 & 10");
  const sorteado = Math.ceil(Math.random() * 10);

  rl.on("line", (numero) => {
    if (tentativas === 0) {
      console.log(`Suas tentativas acabaram, numerero sorteado:${sorteado}`);
      rl.close();
    }
    if (+numero === sorteado) {
      console.log(`Você acertou!! numero Sorteado: ${sorteado}`);
      rl.close();
    }
    tentativas--;
  });
};

adivinhar();
