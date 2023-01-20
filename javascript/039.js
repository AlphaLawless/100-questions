/*
39) Faça um algoritmo que mostre na tela a seguinte contagem:
10 9 8 7 6 5 4 3 Acabou!
*/

const encherDeNumeros = (start, end) => {
  let arr = [];
  const length = end - start + 1;

  for (let i = 0; i < length; i++) {
    arr.push(start + i);
  }
  return arr;
};

function contagem(start, end, type = "inicio") {
  const contagemArr = encherDeNumeros(start, end);
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
    }, 1000 * i);
  }

  return null;
}

contagem(3, 10, "final");
