/*
10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
*/

const getArea = (a, l) => {
  return a * l;
};

const quantoDeTinta = (a, l) => {
  const tamanho = getArea(a, l);
  const quantidade = tamanho / 2;
  return quantidade;
};

console.log(quantoDeTinta(4, 4));
