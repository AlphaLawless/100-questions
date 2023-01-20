/*
87) Crie um programa que melhore o procedimento Gerador() da questão anterior
para que mostre uma mensagem personalizada, passada como parâmetro.
Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
+-------=======------+
Aprendendo Algoritmo
+-------=======------+
*/

const gerador = (texto) => {
  const template = `
  |
  | > console.log(${texto})
  |
  `;
  console.log(template);
};

gerador("Aprendendo Algoritmo");
