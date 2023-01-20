/*
86) Crie um programa que tenha um procedimento Gerador() que, quando chamado,
mostre a mensagem "Olá, Mundo!" com algum componente visual (linhas)
Ex: Ao chamar Gerador() aparece:
+-------=======------+
Olá, Mundo!
+-------=======------+
*/

const gerador = (texto) => {
  const template = `
  |------------------|
  |                  |
  |    ${texto.padEnd(14, " ")}|
  |                  |
  |------------------|
  `;
  console.log(template);
};

gerador("Olá, Mundo!");
