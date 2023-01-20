/*
92) Crie uma lógica que leia um número inteiro e passe para um procedimento
ParOuImpar() que vai verificar e mostrar na tela se o valor passado como
parâmetro é PAR ou ÍMPAR.
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

const ParOuImpar = (num1) => {
  const n1 = Number(num1);

  if (n1 % 2 === 0) console.log(`${n1} é par!`);
  else console.log(`${n1} é ímpar!`);
};

const main = async () => {
  let stopped = true;
  while (stopped) {
    const num1 = await question("\nNum-1:");
    ParOuImpar(num1);

    const encerrar = await question("Tentar novamente:");
    if (encerrar.toLowerCase() === "n") stopped = false;
  }

  rl.close();
};

main();
