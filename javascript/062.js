/*
62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de
várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
na tela:
a) Quantas idades foram digitadas
b) Qual é a média entre as idades digitadas
c) Quantas pessoas tem 21 anos ou mais.
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
function maisDe(value, ...values) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] >= value) total++;
  }
  return total;
}
const media = (...values) => {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    const value = Number(values[i]);
    if (!isNaN(value)) total += value;
  }
  return total / values.length;
};

const main = async () => {
  let stopped = true;
  const idades = [];
  while (stopped) {
    const idade = await question("Idade:");
    const parar = await question("Parar:");
    idades.push(idade);
    if (parar === "sim") stopped = false;
  }
  const total = media(...idades);
  console.log(
    `Média do Grupo: ${total}\nTotal de Idade Digitadas: ${
      idades.length
    }\n21 ou mais: ${maisDe(21, ...idades)}`
  );
  rl.close();
};

main();
