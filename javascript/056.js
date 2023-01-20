/*
56) Crie um programa que leia vários números pelo teclado e mostre no final o
somatório entre eles.
Obs: O programa será interrompido quando o número 1111 for digitado
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let total = 0;
rl.on("line", (input) => {
  const inputNumber = Number(input);
  console.log(inputNumber);
  if (!isNaN(inputNumber)) {
    if (inputNumber === 1111) rl.close();
    else total += inputNumber;
  }
  console.log(`Total é: ${total}`);
});
