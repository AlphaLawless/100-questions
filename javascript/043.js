/*
43) Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...
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
      if (elemento % 4 === 0) console.log(`[${elemento}]`);
      else console.log(elemento);

      if (elemento === ultimoElemento) {
        console.log("Acabou!");
      }
    }, 500 * i);
  }

  return null;
}

contagem(1, 30, 1, "final");
