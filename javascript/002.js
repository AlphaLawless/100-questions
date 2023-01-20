/*
2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-
vindas para ela:
Ex:
Qual é o seu nome? João da Silva
Olá João da Silva, é um prazer te conhecer!
*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual é o seu nome? ", (name) => {
  console.log(`Olá ${name}, é um prazer te conhecer!`);
  readline.close();
});
