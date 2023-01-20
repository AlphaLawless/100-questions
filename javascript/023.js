/*
23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. Faça um programa que leia nome,
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
que:
- Homens ganham 5% de desconto
- Mulheres ganham 13% de desconto
*/

const promocao = (nome, sexo, valor) => {
  if (sexo === "mulher") {
    return `Parabéns pelo seu dia ${nome}, a compra iria sair por ${valor}, vai sair por ${
      valor - valor * 0.13
    }`;
  } else {
    return `Ola senhor ${nome} a sua compra iria sair por ${valor}, hoje ela ira sair por ${
      valor - valor * 0.05
    } `;
  }
};

console.log(promocao("Ana", "mulher", 100));
console.log(promocao("Paulo", "Homem", 100));
