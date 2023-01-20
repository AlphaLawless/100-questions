/*
31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
*/

const options = ["pedra", "papel", "tesoura"];

const jogar = (tipo) => {
  const jogadaPC = Math.floor(Math.random() * options.length);
  const valorJogador = options.indexOf(tipo);

  if (valorJogador === -1) return "Esta opção não existe! ";
  return JoKenPo(valorJogador, jogadaPC);
};

const JoKenPo = (jogador, bot) => {
  if (jogador === bot) {
    return "Empatou";
  }
  if (jogador - bot === -2 || jogador - bot === 1) {
    return "Voce Ganhou";
  }
  return "Voce Perdeu";
};

console.log(jogar("tesoura"));
