/*
42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
qualquer e mostre uma contagem até esse valor:
Ex: Digite um valor: 35
Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!
*/

const encherDeNumeros = (start, end, step = 1) => {
  let arr = [];
  const length = end - start + 1;
  for (let i = 0; i < length; i += step) {
    arr.push(start + i);
  }
  return arr;
};

function contagem(start, end, step, type = "inicio") {
  const contagemArr = encherDeNumeros(start, end, step);
  for (let i = 0; i < contagemArr.length; i++) {
    let elemento;
    let ultimoElemento;
    if (type == "inicio") {
      elemento = contagemArr[i];
      ultimoElemento = contagemArr[contagemArr.length - 1];
    } else {
      elemento = contagemArr[contagemArr.length - i - 1];
      ultimoElemento = contagemArr[0];
    }

    setTimeout(() => {
      console.log(elemento);
      if (elemento === ultimoElemento) {
        console.log("Acabou!");
      }
    }, 500 * i);
  }

  return null;
}

contagem(0, 35);
