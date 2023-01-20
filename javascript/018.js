/*
18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.
*/

const podeVotar = (anoNascimento) => {
  const date = new Date();
  const yearActual = date.getFullYear();
  const old = yearActual - anoNascimento;
  if (old >= 16) return "Pode Votar";
  else return "Não Pode Votar";
};

console.log(podeVotar(2005));
