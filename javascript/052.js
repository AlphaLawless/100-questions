/*
52) Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
a) Qual é a média de idade do grupo
b) Quantas pessoas tem mais de 18 anos
c) Quantas pessoas tem menos de 5 anos
d) Qual foi a maior idade lida
*/

const caracteristicas = (...pessoas) => {
  const caracteristicas = {
    maiorDeIdade: 0,
    menorDeIdade: 0,
    maiorIdade: 0,
    mediaDeIdade: media(...pessoas),
  };

  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    if (pessoa > caracteristicas.maiorIdade)
      caracteristicas.maiorIdade = pessoa;
    if (pessoa > 18) caracteristicas.maiorDeIdade++;
    if (pessoa < 5) caracteristicas.menorDeIdade++;
  }
  return caracteristicas;
};

const media = (...numeros) => {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return +(total / numeros.length).toFixed(1);
};

const caracter = caracteristicas(10, 19, 24, 90, 4, 52, 49, 4, 24, 25, 63);

console.log(caracter);
