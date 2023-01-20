/*
64) Desenvolva um programa usando a estrutura “para” que mostre na tela a
seguinte contagem:
0 5 10 15 20 25 30 35 40 Acabou!
*/

const contagem = (start, max, step) => {
  const total = start;
  for (let i = total; i <= max; i += step) {
    console.log(i);
  }
  console.log("Acabou!");
};

contagem(0, 40, 5);
