/*
54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
no final:
a) Qual foi a média de altura do grupo
b) Quantas pessoas pesam mais de 90Kg
c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.
*/

const media = (...numeros) => {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return +(total / numeros.length).toFixed(1);
};

const maiorQue = (max, ...valores) => {
  let total = 0;
  for (let i = 0; i < valores.length; i++) {
    const valor = valores[i];
    if (valor > max) total++;
  }
  return total;
};

const caracteristicas = (...pessoas) => {
  const alturas = [];
  const pesos = [];

  let menosde50e160 = 0;
  let maisde190e100 = 0;

  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    alturas.push(pessoa.altura);
    pesos.push(pessoa.peso);
    if (pessoa.peso < 50 && pessoa.altura < 1.6) menosde50e160++;
    if (pessoa.peso > 100 && pessoa.altura > 1.9) maisde190e100++;
  }
  const maisDe90 = maiorQue(90, ...pesos);
  const mediaAltura = media(...alturas);

  console.log(
    `Pessoas que pesam menos de 50Kg tem menos de 1.60m: ${menosde50e160}\nQuantas pessoas que medem mais de 1.90m pesam mais de 100Kg: ${maisde190e100}\nMédia de altura do grupo: ${mediaAltura}\nPessoas que pesam mais de 90Kg: ${maisDe90}`
  );
};

caracteristicas(
  { peso: 50, altura: 1.6 },
  { peso: 70, altura: 1.8 },
  { peso: 80, altura: 1.75 },
  { peso: 90, altura: 1.9 },
  { peso: 40, altura: 1.85 },
  { peso: 55, altura: 1.75 },
  { peso: 95, altura: 2.1 },
  { peso: 100, altura: 1.95 },
  { peso: 110, altura: 2.11 },
  { peso: 65, altura: 1.65 }
);
