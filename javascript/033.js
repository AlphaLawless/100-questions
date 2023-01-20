/*
33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra
de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
ela não pode exceder 30% do salário ou então o empréstimo será negado.
*/

const validarEmprestimo = (valorCasa, salario, anosDePagamento) => {
  const maxParcela = salario * 0.3;
  const meses = anosDePagamento * 12;
  const conseguePagar = meses * maxParcela;
  if (conseguePagar >= valorCasa) return "Emprestimo liberdado";
  return "Emprestimo negado!!";
};

console.log(validarEmprestimo(10000, 3000, 1));
console.log(validarEmprestimo(10000, 2500, 1));
console.log(validarEmprestimo(10000, 2778, 1));
