/*
34) O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
indivíduo dentro de certas faixas.
- abaixo de 18.5: Abaixo do peso
- entre 18.5 e 25: Peso ideal
- entre 25 e 30: Sobrepeso
- entre 30 e 40: Obesidade
- acima de 40: Obseidade mórbida
Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado
da altura)
*/

const imc = (peso, altura) => {
  const imc = peso / altura ** 2;
  console.log(imc.toFixed(1));
  if (imc < 18.5) return "Abaixo do Peso";
  if (imc >= 18.5 && imc < 25) return "Peso Ideal";
  if (imc >= 25 && imc < 30) return "Sobrepeso";
  if (imc >= 30 && imc < 40) return "Obesidade";
  if (imc >= 40) return "Obesidade mórbida";
};

console.log(imc(500, 2.11));