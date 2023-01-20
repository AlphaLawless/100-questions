/*
59) Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
a) qual é a maior idade lida
b) quantos homens foram cadastrados
c) qual é a idade da mulher mais jovem
d) qual é a média de idade entre os homens
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

const ordenar = (...numeros) => {
  let ordenada = [];
  let menor = 0;
  let menorI = 0;
  for (let i = 0; 0 < numeros.length; i) {
    menor = numeros[i];
    menorI = i;
    for (let b = 0; b < numeros.length; b++) {
      if (!(menor < numeros[b])) {
        menor = numeros[b];
        menorI = b;
      }
    }
    ordenada.push(menor);
    numeros.splice(menorI, 1);
  }
  return ordenada;
};

const main = async () => {
  let stopped = true;
  const homens = [];
  const mulheres = [];
  while (stopped) {
    const sexo = await question("Sexo:");
    const idade = await question("idade:");
    const encerrar = await question("Deseja cancelar:");
    encerrar.toLowerCase() === "s" ? (stopped = false) : (stopped = true);
    if (sexo && idade) {
      sexo === "mulher" ? mulheres.push(idade) : homens.push(idade);
    }
  }
  const mediaHomens = media(...homens) || 0;
  const ordenadaMulheres = ordenar(...mulheres) || 0;
  const maiorIdade = ordenar(...mulheres, ...homens) || 0;
  console.log(
    `Media de idade dos Homens: ${mediaHomens}, mulher mais jovem: ${
      ordenadaMulheres[0] || 0
    }, Homens cadastrados ${homens.length || 0}, maior idade lida: ${
      maiorIdade[maiorIdade.length - 1]
    } `
  );

  rl.close();
};

main();
