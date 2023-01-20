/*
68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
“para”. No final, mostre na tela:
a) Quantas mulheres foram cadastradas
b) Quantos homens pesam mais de 100Kg
c) A média de peso entre as mulheres
d) O maior peso entre os homens
*/

const caracteristicas = (...pessoas) => {
  let mulheres = 0;
  let homemMaisDe100 = 0;
  let mulheresPesos = 0;
  let homemMaiorPeso = 0;
  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    switch (pessoa.sexo.toLowerCase()) {
      case "feminino":
        mulheres++;
        mulheresPesos += pessoa.peso;
        break;
      case "masculino":
        if (pessoa.peso > 100) homemMaisDe100++;
        if (pessoa.peso > homemMaiorPeso) homemMaiorPeso = pessoa.peso;
        break;
    }
  }
  console.log(
    `Mulheres entrevistadas: ${mulheres}\nHomens com mais de 100kg: ${homemMaisDe100}\nMédia de Peso entre as mulheres: ${(
      mulheresPesos / mulheres
    ).toFixed(1)}\nMais peso entre os Homens: ${homemMaiorPeso}`
  );
};

caracteristicas(
  { peso: 90, sexo: "masculino" },
  { peso: 100, sexo: "feminino" },
  { peso: 90, sexo: "masculino" },
  { peso: 70, sexo: "feminino" },
  { peso: 100, sexo: "masculino" },
  { peso: 53, sexo: "feminino" },
  { peso: 70, sexo: "masculino" },
  { peso: 58, sexo: "feminino" },
  { peso: 115, sexo: "masculino" },
  { peso: 65, sexo: "feminino" },
  { peso: 90, sexo: "masculino" },
  { peso: 45, sexo: "feminino" },
  { peso: 80, sexo: "masculino" },
  { peso: 75, sexo: "feminino" }
);
