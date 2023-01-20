/*
22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.
*/

const situacaoAlistamento = (ano) => {
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - ano;
  if (idade < 18) return `Falta ainda ${18 - idade}`;
  if (idade > 18) return `Já se passaram ${idade - 18}`;
  return "Este é o ano de se alistar!!";
};

console.log(situacaoAlistamento(2005));
console.log(situacaoAlistamento(2006));
console.log(situacaoAlistamento(2004));
