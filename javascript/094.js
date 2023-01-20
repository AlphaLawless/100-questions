/*
94) [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado
Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
termos da sequência serão mostrados na tela. O seu procedimento deve receber
esse valor e mostrar a quantidade de elementos solicitados.

Obs: Use os exercícios 70 e 75 para te ajudar na solução

Ex:
Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM
*/

function Fibonacci(range) {
  const sequencia = [1, ">>", 1];
  for (let i = 2; i < range * 2 - 3; i += 2) {
    sequencia.push(">>", sequencia[i] + sequencia[i - 2]);
  }
  console.log(...sequencia);
  return sequencia;
}

Fibonacci(9);
