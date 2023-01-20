/*
44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
incremento, mostrando em seguida todos os valores no intervalo:
Ex: Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!
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

function contagem(start, end, step) {
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
    }, 500 * i);
  }

  return null;
}

contagem(30, 40, 1);
