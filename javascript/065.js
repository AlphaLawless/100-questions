/*
65) Desenvolva um programa usando a estrutura “para” que mostre na tela a
seguinte contagem:
100 90 80 70 60 50 40 30 20 10 0 Acabou!
*/

const contagem = (start, max, step) => {
  if (start > max) {
    for (let i = start; i >= max; i -= step) {
      console.log(i);
    }
  } else {
    for (let i = start; i <= max; i += step) {
      console.log(i);
    }
  }
  console.log("Acabou!");
};

contagem(100, 10, 10);
