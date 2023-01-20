/*
85) Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
guarde esses dados em três vetores. No final, mostre uma listagem contendo
apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.
*/

const checkSexo = (sexo, ...pessoas) => {
  const arr = [];
  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    if (pessoa.sexo.toLowerCase() === sexo) arr.push(pessoa);
  }
  return arr;
};

const checkSalario = (salario, ...pessoas) => {
  const arr = [];

  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    if (pessoa.salario > salario) {
      arr.push(pessoa);
    }
  }
  return arr;
};

const exibir = (...pessoas) => {
  console.table(pessoas);
};

const main = (...pessoas) => {
  const mulheres = checkSexo("feminino", ...pessoas);
  const homens = checkSexo("masculino", ...pessoas);
  const maisDe5mil = checkSalario(5000, ...mulheres);
  exibir(...maisDe5mil);
  exibir(...homens);
};

main(
  { nome: "Ana", sexo: "Feminino", salario: 6500 },
  { nome: "Marcos", sexo: "Masculino", salario: 5500 },
  { nome: "Gabriela", sexo: "Feminino", salario: 8000 },
  { nome: "Paula", sexo: "Feminino", salario: 5100 },
  { nome: "Pedro", sexo: "Masculino", salario: 4800 },
  { nome: "Joana", sexo: "Feminino", salario: 5300 },
  { nome: "Jonas", sexo: "Masculino", salario: 5700 },
  { nome: "Gisela", sexo: "Feminino", salario: 6500 },
  { nome: "Kaik", sexo: "Masculino", salario: 3800 }
);
