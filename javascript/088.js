/*
88) Crie um programa que melhore o procedimento Gerador() da questão anterior
para que mostre uma mensagem vário
Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
+-------=======------+
Aprendendo Algoritmo
Aprendendo Algoritmo
Aprendendo Algoritmo
Aprendendo Algoritmo
+-------=======------+
*/

const gerador = (texto, repeat = 1) => {
  console.log(`+-------=======------+`);
  for (let i = 0; i < repeat; i++) {
    console.log(texto);
  }
  console.log(`+-------=======------+`);
};

gerador("Aprendendo Algoritmo", 4);
