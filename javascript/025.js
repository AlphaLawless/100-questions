/*
25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.
*/

const isTriangle = (a, b, c) => {
  const l1 = a + b > c;
  const l2 = c + a > b;
  const l3 = b + c > a;
  if (l1 && l2 && l3) return true;
  else return false;
};

console.log(isTriangle(10, 10, 10));
