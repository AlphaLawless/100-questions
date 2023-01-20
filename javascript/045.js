/*
45) O programa acima vai ter um problema quando digitarmos o primeiro valor
maior que o último. Resolva esse problema com um código que funcione em qualquer
situação.
*/

const encherDeNumeros = (start, end, step = 1) => {
  let arr = [];
  let length = 0;
  if (start < end) {
    length = end - start + 1;
    for (let i = 0; i < length; i += step) {
      arr.push(start + i);
    }
  } else {
    length = start - end + 1;
    for (let i = 0; i < length; i += step) {
      arr.push(start - i);
    }
  }
  return arr;
};

function contagem(start, end, step, type = "inicio") {
  const contagemArr = encherDeNumeros(start, end, step);
  for (let i = 0; i < contagemArr.length; i++) {
    let elemento = contagemArr[i];
    let ultimoElemento = contagemArr[contagemArr.length - i - 1];

    setTimeout(() => {
      if (elemento % 4 === 0) console.log(`[${elemento}]`);
      else console.log(elemento);

      if (elemento === ultimoElemento) {
        console.log("Acabou!");
      }
    }, 1000 * i);
  }

  return null;
}

contagem(30, 40, 1);
