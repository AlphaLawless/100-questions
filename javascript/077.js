/*
77) Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
final, mostre uma listagem com todos os nomes informados, na ordem inversa
daquela em que eles foram informados.
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

const main = async () => {
  let stopped = true;
  let i = 0;
  const nomes = [];
  while (stopped) {
    const nome = await question("Nome:");
    if (nome) {
      nomes.push(nome + " " + i);
      i++;
    }
    if (i >= 7) stopped = false;
  }
  console.log(...reverse(...nomes));
  rl.close();
};

main();

const reverse = (...values) => {
  for (let i = 0; i < values.length / 2; i++) {
    const e1 = values[i];
    const e2 = values[values.length - i - 1];

    values[i] = e2;
    values[values.length - i - 1] = e1;
  }
  return values;
};
