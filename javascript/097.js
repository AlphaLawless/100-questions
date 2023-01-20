/*
97) Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma
adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o
maior entre eles.
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

const isNumbers = (...numbers) => {
  let ok = true;
  let i = 0;
  while (ok) {
    if (isNaN(Number(numbers[i])) || i === numbers.length - 1) {
      ok = false;
    }
    i++;
  }
  return ok;
};

const maior = (...numbers) => {
  let maior = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) maior = numbers[i];
  }
  return maior;
};

const somador = (num1, num2, num3) => {
  const n1 = Number(num1);
  const n2 = Number(num2);
  const n3 = Number(num3);
  try {
    if (isNumbers(n1, n2, n3)) throw "Não é possivel calcular! ;_;";
    if (n1 === n2 && n1 === n3 && n2 === n3)
      return console.log("Todos são iguais!");
    else return console.log(`O maior numero entre eles é ${maior(n1, n2, n3)}`);
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  let stopped = true;
  while (stopped) {
    const num1 = await question("\nNum-1:");
    const num2 = await question("Num-2:");
    const num3 = await question("Num-3:");
    somador(num1, num2, num3);

    const encerrar = await question("Tentar novamente:");
    if (encerrar.toLowerCase() === "n") stopped = false;
  }
  rl.close();
};

main();
