/*
89) Crie um programa que melhore o procedimento Gerador() da questão anterior
para que o programador possa escolher uma entre três bordas:
+-------=======------+ Borda 1
~~~~~~~~:::::::~~~~~~~ Borda 2
<<<<<<<<------->>>>>>> Borda 3

Ex: Uma chamada válida seria Gerador("Portugol Studio", 3, 2)
~~~~~~~~:::::::~~~~~~~
Vim melhor Editor
Vim melhor Editor
Vim melhor Editor
~~~~~~~~:::::::~~~~~~~
*/

const boderGenerator = (type) => {
  switch (type) {
    case 1:
      return `+-------=======------+`;
    case 2:
      return `~~~~~~~~:::::::~~~~~~~`;
    case 3:
      return `<<<<<<<<------->>>>>>>`;
    default:
      return `+-------=======------+`;
  }
};

const gerador = (texto, repeat = 1, typeBorder) => {
  const border = boderGenerator(typeBorder);
  console.log(border);
  for (let i = 0; i < repeat; i++) {
    console.log(texto);
  }
  console.log(border);
};

gerador("Portugol Studio", 3, 2);
