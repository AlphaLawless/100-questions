/*
60) Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
a) O nome da pessoa mais velha
b) O nome da mulher mais jovem
c) A média de idade do grupo
d) Quantos homens tem mais de 30 anos
e) Quantas mulheres tem menos de 18 anos
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

const ordenar = (...numeros) => {
  let ordenada = [];
  let menor = 0;
  let menorI = 0;
  for (let i = 0; 0 < numeros.length; i) {
    menor = numeros[i];
    menorI = i;
    for (let b = 0; b < numeros.length; b++) {
      if (!(menor.idade < numeros[b].idade)) {
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
    const nome = await question("Nome: ");
    const sexo = await question("Sexo: ");
    const idade = await question("idade: ");
    const encerrar = await question("Deseja cancelar:");
    encerrar.toLowerCase() === "s" ? (stopped = false) : (stopped = true);

    if ((nome, sexo, idade)) {
      if (sexo.toLowerCase() === "feminino")
        mulheres.push({ nome, sexo, idade });
      else if (sexo.toLowerCase() === "masculino")
        homens.push({ nome, sexo, idade });
    }
  }
  const maisVelho = ordenar(...homens, ...mulheres);
  const maisNova = ordenar(...mulheres)[0];
  let somaDasIdades = 0;
  let maisDe30 = 0;
  let menosDe18 = 0;

  for (let i = 0; i < maisVelho.length; i++) {
    const pessoa = maisVelho[i];
    somaDasIdades += +pessoa.idade;
    if (pessoa.sexo.toLowerCase() === "masculino" && +pessoa.idade > 30)
      maisDe30++;
    if (pessoa.sexo.toLowerCase() === "feminino" && +pessoa.idade < 18)
      menosDe18++;
  }
  console.log(
    `Média de idade do Grupo: ${
      somaDasIdades / maisVelho.length
    }\n Pessoa Mais velha: ${maisVelho[maisVelho.length - 1].nome} com ${
      maisVelho[maisVelho.length - 1].idade
    }anos\nMulher mais nova: ${maisNova.nome} com ${
      maisNova.idade
    }\nMais de 30 anos: ${maisDe30}\nMenos de 18 anos ${menosDe18}`
  );
  rl.close();
};

main();
