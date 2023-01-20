/*
95) Refaça o exercício 90, só que agora em forma de função Somador(), que vai
receber dois parâmetros e vai retornar o resultado da soma entre eles para o
programa principal.
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
    return soma;
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  let stopped = true;
  while (stopped) {
    const num1 = await question("\nNum-1:");
    const num2 = await question("Num-2:");
    const res = somador(num1, num2);
    console.log(res);
    const encerrar = await question("Tentar novamente:");
    if (encerrar.toLowerCase() === "n") stopped = false;
  }

  rl.close();
};

main();
