/*
51) Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
qual foi o maior e qual foi o menor preço digitados.
*/

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
  console.log(`Menor ${ordenada[0]}`);
  console.log(`Maior ${ordenada[ordenada.length - 1]}`);
  return ordenada;
};

const ordenada = ordenar(1, 4, 2, 5, 6, 24, 12, 32, 9, 123, 42, 1, 0, 0, 0);

console.log(ordenada);
