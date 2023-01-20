/*
57) Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
No final, mostre o total de salários pagos aos homens e o total pago às
mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
sempre que ler os dados de um funcionário.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (question) => {
  return new Promise((r) => {
    rl.question(question, (res) => {
      r(res);
    });
  });
};
const total = (...values) => {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    const value = Number(values[i]);
    if (!isNaN(value)) total += value;
  }
  console.log(total);
  return total;
};

const main = async () => {
  let stopped = true;
  const homens = [];
  const mulheres = [];
  while (stopped) {
    const sexo = await question("Sexo do funcionario:");
    const salario = await question("Salario do Funcionario:");
    const encerrar = await question("Deseja cancelar: |Sim ou Não|");
    encerrar.toLowerCase() === "sim" ? (stopped = false) : (stopped = true);
    if (sexo && salario) {
      sexo === "mulher" ? mulheres.push(salario) : homens.push(salario);
    }
  }
  const totalPagoHomens = total(...homens);
  const totalPagoMulheres = total(...mulheres);
  console.log(
    `Total pago aos Homens: ${totalPagoHomens}, Total pago as Mulheres: ${totalPagoMulheres}.`
  );
  rl.close();
};

main();
