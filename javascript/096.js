/*
96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
um aluno e retornar a sua média para o programa principal.
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

const Media = (...valores) => {
  let total = 0;
  for (let i = 0; i < valores.length; i++) {
    const valor = Number(valores[i]);
    if (!isNaN(valor)) total += valor;
  }
  return total / valores.length;
};

const main = async () => {
  let stopped = true;
  const notas = [];
  while (stopped) {
    const num1 = await question("\nSuaNota:");
    if (num1) notas.push(num1);
    const encerrar = await question("Parar de enviar notas?");
    if (encerrar.toLowerCase() === "s") stopped = false;
  }
  const media = Media(...notas);
  console.log("A sua média foi:", media);
  rl.close();
};

main();
