/*
82) Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
um vetor. No final, mostre:
a) Qual é a média da turma
b) Quantos alunos estão acima da média da turma
c) Qual foi a maior nota digitada
d) Em que posições a maior nota aparece
*/

const media = (...values) => {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  return (total / values.length).toFixed(2);
};

const countByIndex = (value, ...values) => {
  let indexArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] >= value) {
      indexArr.push(i);
    }
  }
  return indexArr;
};

const maior = (...values) => {
  let maior = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > maior) {
      maior = values[i];
    }
  }
  return maior;
};

const statusNotas = (...notas) => {
  const mediaNotas = media(...notas);
  const mais6 = countByIndex(6, ...notas);
  const maiorNota = maior(...notas);
  const maiorNotaIndex = countByIndex(maiorNota, ...notas);

  console.log(
    "Media:",
    mediaNotas,
    "\nAcima da media:",
    ...mais6,
    "\nMaior Nota:",
    maiorNota,
    "\nIndexs: ",
    ...maiorNotaIndex,
    "\n"
  );
};

statusNotas(5, 6, 6, 7, 8, 10, 4, 2.5, 6, 5, 10);
