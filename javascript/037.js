/*
37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um
aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
No final, mostre o seu novo salário, baseado na tabela a seguir:
- Mulheres
- menos de 15 anos de empresa: +5%
- de 15 até 20 anos de empresa: +12%
- mais de 20 anos de empresa: +23%
- Homens
- menos de 20 anos de empresa: +3%
- de 20 até 30 anos de empresa: +13%
- mais de 30 anos de empresa: +25%
*/

const calcularAumento = (salario, aumento) =>
  (salario += salario * (aumento / 100));

const calcularAumentoM = (anos) => {
  if (anos < 15) return 5;
  if (anos > 15 && anos <= 20) return 12;
  if (anos > 20) return 23;
};
const calcularAumentoH = (anos) => {
  if (anos < 20) return 3;
  if (anos >= 20 && anos <= 30) return 13;
  if (anos > 30) return 25;
};

const aumento = (salario, genero, anosDeTrabalho) => {
  if (genero === "mulher") {
    const aumento = calcularAumento(salario, calcularAumentoM(anosDeTrabalho));
    return aumento;
  }
  if (genero === "homem") {
    const aumento = calcularAumento(salario, calcularAumentoH(anosDeTrabalho));
    return aumento;
  }
};
console.log(aumento(1000, "homem", 32));
console.log(aumento(1000, "mulher", 32));
