/*
30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
de triângulo será formado:
- EQUILÁTERO: todos os lados iguais
- ISÓSCELES: dois lados iguais
- ESCALENO: todos os lados diferentes
*/

const equalItems = (arr) => {
  let equals = [];
  if (arr instanceof Array) {
    for (let i = 0; i < arr.length; i++) {
      const arrayClone = [...arr];
      arrayClone.splice(i, 1);
      if (arrayClone.includes(arr[i])) {
        equals.push(arr[i]);
      }
    }
  }
  return equals;
};

const isTriangle = (a, b, c) => {
  const l1 = a + b > c;
  const l2 = c + a > b;
  const l3 = b + c > a;
  const equals = equalItems([a, b, c]);
  if (l1 && l2 && l3) {
    switch (equals.length) {
      case 0:
        return "ESCALENO: todos os lados diferentes";
      case 2:
        return "ISÓSCELES: dois lados iguais";
      case 3:
        return "EQUILÁTERO: todos os lados iguais";
    }
  } else return false;
};

console.log(isTriangle(12, 12, 10));
console.log(isTriangle(10, 10, 10));
console.log(isTriangle(5, 2.5, 3.5));
console.log(isTriangle(5, 10, 3.5));
