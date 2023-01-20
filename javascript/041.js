/*
41) Desenvolva um programa que mostre na tela a seguinte contagem:
100 95 90 85 80 ... 0 Acabou!
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

contagem(0, 100, 5, "final");
