/*
99) Faça um programa que possua uma função chamada Potencia(), que vai receber
dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
exponenciação.
Ex: Potencia(5,2) vai calcular 5 2 = 25
*/

const potencia = (base, expoente) => {
  let total = base;
  for (let i = 1; i < expoente; i++) {
    total = total * base;
  }
  console.log(total);
  return total;
};

potencia(5, 12);
