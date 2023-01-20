/*
29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
acordo com a tabela a seguir:
- Até 3 anos de empresa: aumento de 3%
- entre 3 e 10 anos: aumento de 12.5%
- 10 anos ou mais: aumento de 20%
*/

const aumento = (nome, salário, anosTrabalho) => {
  let aumento = salário;
  if (anosTrabalho < 3) aumento += aumento * 0.03;
  if (anosTrabalho >= 3 && anosTrabalho <= 10) aumento += aumento * 0.125;
  if (anosTrabalho > 10) aumento += aumento * 0.2;
  console.log(`Parabéns ${nome} o seu novo salario é ${aumento}`);
  return aumento;
};

aumento("kaik", 2000, 12);
aumento("kaik", 2000, 4);
aumento("kaik", 2000, 2);
