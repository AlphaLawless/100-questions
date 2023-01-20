/*
84) Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
contendo apenas os dados das pessoas menores de idade.
*/

const checkIdades = (...pessoas) => {
  const menorIdade = [];

  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    if (pessoa.idade < 18) {
      menorIdade.push(pessoa);
    }
  }
  return menorIdade;
};

const exibir = (...pessoas) => {
  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    console.log(`Nome: ${pessoa.nome} --- Idade: ${pessoa.idade}`);
  }
};

const main = (...idades) => {
  const menorIdade = checkIdades(...idades);
  exibir(...menorIdade);
};

main(
  {
    nome: "Kaik",
    idade: 18,
  },
  {
    nome: "Ana",
    idade: 16,
  },
  {
    nome: "Gabriel",
    idade: 21,
  },
  {
    nome: "Pedro",
    idade: 24,
  },
  {
    nome: "Angela",
    idade: 15,
  },
  {
    nome: "Kotaka",
    idade: 21,
  },
  {
    nome: "João",
    idade: 12,
  },
  {
    nome: "Enzo",
    idade: 9,
  },
  {
    nome: "Felipe",
    idade: 14,
  },
  {
    nome: "Gabriele",
    idade: 11,
  }
);
