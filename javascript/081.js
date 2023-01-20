/*
81) Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
final, mostre:
a) Qual é a média de idade das pessoas cadastradas
b) Em quais posições temos pessoas com mais de 25 anos
c) Qual foi a maior idade digitada (podem haver repetições)
d) Em que posições digitamos a maior idade
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

const statusIdade = (...idades) => {
  const mediaIdade = media(...idades);
  const mais25 = countByIndex(25, ...idades);
  const maiorIdade = maior(...idades);
  const maiorIdadeIndex = countByIndex(maiorIdade, ...idades);

  console.log(
    "Media:",
    mediaIdade,
    "\nMais de 25:",
    ...mais25,
    "\nMaior Idade:",
    maiorIdade,
    "\nIndexs: ",
    ...maiorIdadeIndex,
    "\n"
  );
};

statusIdade(12, 24, 48, 38, 28, 90, 94, 72, 94);
