/*
63) Crie um programa usando a estrutura “faça enquanto” que leia vários números.
A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na
tela:
a) O somatório entre todos os valores
b) Qual foi o menor valor digitado
c) A média entre todos os valores
d) Quantos valores são pares
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

const total = (...values) => {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    const value = Number(values[i]);
    if (!isNaN(value)) total += value;
  }
  return total;
};
const isPar = (...values) => {
  const pares = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) pares.push(values[i]);
  }
  return pares;
};
const main = async () => {
  let stopped = true;
  const numeros = [];
  while (stopped) {
    const numero = await question("Numero:");
    const parar = await question("Parar:");
    numeros.push(numero);
    if (parar === "s" || parar === "sim") stopped = false;
  }
  const totalNumeros = total(...numeros);
  const mediaNumeros = total(...numeros) / numeros.length;
  const menorNumero = ordenar(...numeros)[0];
  const paresNumeros = isPar(...numeros);

  console.log(
    `Total: ${totalNumeros}\nMédia: ${mediaNumeros}\nMenor: ${menorNumero}\nPares: ${paresNumeros}`
  );
  rl.close();
};

main();
