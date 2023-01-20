/*
90) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
valores para um procedimento Somador() que vai calcular e mostrar a soma entre
eles.
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

const somador = (num1, num2) => {
  try {
    const soma = Number(num1) + Number(num2);
    if (isNaN(soma)) throw "Não foi possivel calcular! ;_;";
    console.log(soma);
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  let stopped = true;
  while (stopped) {
    const num1 = await question("\nNum-1:");
    const num2 = await question("Num-2:");
    somador(num1, num2);

    const encerrar = await question("Tentar novamente:");
    if (encerrar.toLowerCase() === "n") stopped = false;
  }

  rl.close();
};

main();
