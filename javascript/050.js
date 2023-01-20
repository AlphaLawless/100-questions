/*
50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
mostre na tela:
a) Quais foram os números sorteados
b) Quantos números estão acima de 5
c) Quantos números são divisíveis por 3
*/

const sortearNumeros = (total, start, end) => {
  let arr = [];

  for (let i = 0; i < total; i++) {
    let numero = Math.ceil(Math.random() * end);
    if (numero >= start) {
      arr.push(numero);
    } else {
      while (numero < start) {
        numero = Math.ceil(Math.random() * end);
      }
    }
  }
  return arr;
};
const acima = (num) => (num > 5 ? true : false);
const divisivel = (num) => (num % 3 === 0 ? true : false);

const getNumeros = (total, inicio, final) => {
  const numerosAleatorios = sortearNumeros(total, inicio, final);
  let divisiveis = [];
  let acimaArr = [];

  for (let i = 0; i < numerosAleatorios.length; i++) {
    const numero = numerosAleatorios[i];
    if (acima(numero)) acimaArr.push(numero);
    if (divisivel(numero)) divisiveis.push(numero);
  }
  console.log(
    "Numeros Aleatorios",
    numerosAleatorios,
    "\nDivisiveis por 3:",
    divisiveis,
    "\nAcimaDe5:",
    acimaArr
  );
};

getNumeros(20, 0, 100);
