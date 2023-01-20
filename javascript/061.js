/*
61) Crie um programa que mostre na tela a seguinte contagem, usando a estrutura
“faça enquanto”
0 3 6 9 12 15 18 21 24 27 30 Acabou!
*/

const contagem = async (start, max, step = 1) => {
  let total = start;
  while (total <= max) {
    console.log(total);
    total += step;
    tick++;
  }
};

contagem(0, 30, 3);
