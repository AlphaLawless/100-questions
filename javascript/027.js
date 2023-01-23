/*
27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
mostrando uma mensagem no final, de acordo com a média atingida:
- Média até 4.9: REPROVADO
- Média entre 5.0 e 6.9: RECUPERAÇÃO
- Média 7.0 ou superior: APROVADO
*/

const isAprovado = (n1, n2) => {
  const media = (n1 + n2) / 2;
  if (media <= 4.9) return "REPROVADO";
  if (media >= 5 && media <= 6.9) return "RECUPERAÇÃO";
  return "Aprovado";
};

console.log(isAprovado(100, 100));