/*
19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0).
*/

const media = (aluno, ...notas) => {
  let total = 0;
  for (let i = 0; i < notas.length; i++) {
    total += notas[i];
  }
  const media = total / notas.length;

  return `Média do aluno: ${aluno} é ${media}`;
};

console.log(media("Kaik", 10, 8.5));
