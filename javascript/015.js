/*
15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
por hora trabalhada.
*/

const valorSalario = (dias) => {
  const salario = dias * 8 * 25;
  console.log(`O salário do funcionario é: ${salario}`);
  return salario;
};

valorSalario(25);
