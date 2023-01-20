/*
91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
valores para um procedimento Maior() que vai verificar qual deles é o maior e
mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
informando essa característica.
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
  const n1 = Number(num1);
  const n2 = Number(num2);
  try {
    if ((isNaN(n1), isNaN(n2))) throw "Não é possivel calcular! ;_;";
    if (n1 === n2) return console.log(`${n1} igual a ${n2}`);
    if (n1 > n2) return console.log(`${n1} maior que ${n2}`);
    else return console.log(`${n1} menor que ${n2}`);
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
