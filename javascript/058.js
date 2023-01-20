/*
58) Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
vai parar quando for digitada a idade 999. No final, mostre quantos alunos
existem na turma e qual é a média de idade do grupo.
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
    const idade = await question("Idade do Aluno:");
    if (idade === "999") stopped = false;
    else idades.push(idade);
  }
  const total = media(...idades);
  console.log(
    `A media de idade dos alunos são: ${total}, numero total de alunos: ${idades.length}.`
  );
  rl.close();
};

main();
