/*
3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.
*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = (question) => {
  return new Promise((r) => {
    readline.question(question, (value) => {
      r(value);
    });
  });
};

const main = async () => {
  const nome = await question("Nome do Funcionario: ");
  const salario = await question("Salario: ");
  console.log(`O funcionário ${nome} tem um sálario de ${salario} em Junho.`);
  readline.close();
};

main();
