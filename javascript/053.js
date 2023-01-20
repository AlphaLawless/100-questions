/*
53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
a) Quantos homens foram cadastrados
b) Quantas mulheres foram cadastradas
c) A média de idade do grupo
d) A média de idade dos homens
e) Quantas mulheres tem mais de 20 anos
*/

const maiorQue = (max, ...valores) => {
  let total = 0;
  for (let i = 0; i < valores.length; i++) {
    const valor = valores[i];
    if (valor > max) total++;
  }
  return total;
};

const media = (...numeros) => {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return +(total / numeros.length).toFixed(1);
};
const cadastrados = (...pessoas) => {
  const homens = [];
  const mulheres = [];

  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].sexo === "Masculino") homens.push(pessoas[i].idade);
    else mulheres.push(pessoas[i].idade);
  }
  const totalHomens = homens.length;
  const totalMulheres = mulheres.length;
  const mediaGrupo = media(...homens, ...mulheres);
  console.log(
    `Total Homens: ${totalHomens}\nTotal Mulheres: ${totalMulheres}\nMedia de Idade do Grupo: ${mediaGrupo}\nMedia de Idade dos Homens: ${media(
      ...homens
    )}\nMedia de Idade das Mulheres: ${media(
      ...mulheres
    )}\nMulheres com mais de 20 anos: ${maiorQue(20, ...mulheres)}`
  );
};

cadastrados(
  { idade: 18, sexo: "Masculino" },
  { idade: 32, sexo: "Feminino" },
  { idade: 22, sexo: "Feminino" },
  { idade: 19, sexo: "Feminino" },
  { idade: 26, sexo: "Feminino" },
  { idade: 24, sexo: "Masculino" }
);
