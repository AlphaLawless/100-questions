/*
100) Melhore o exercício 96, criando além da função Media() uma outra função
chamada Situacao(), que vai retornar para o programa principal se o aluno está
APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como
parâmetro o resultado retornado pela função Media().
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (question) => {
  return new Promise((r) => {
    rl.question(question, (res) => {
      r(res);
    });
  });
};

const Media = (...valores) => {
  let total = 0;
  for (let i = 0; i < valores.length; i++) {
    const valor = Number(valores[i]);
    if (!isNaN(valor)) total += valor;
  }
  return (total / valores.length).toFixed(2);
};

const Situacao = (media) => {
  if (media <= 4.9) return "REPROVADO";
  if (media >= 5 && media <= 6.9) return "RECUPERAÇÃO";
  return "APROVADO";
};

const main = async () => {
  let stopped = true;
  const notas = [];
  while (stopped) {
    const num1 = await question("\nSuaNota: ");
    if (num1) notas.push(num1);
    const encerrar = await question("Parar de enviar notas?");
    if (encerrar.toLowerCase() === "s") stopped = false;
  }
  const media = Media(...notas);
  console.log("A sua média foi:", media, "e sua situação é", Situacao(media));
  rl.close();
};

main();
