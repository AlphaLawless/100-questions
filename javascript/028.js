/*
28) Faça um programa que leia a largura e o comprimento de um terreno
retangular, calculando e mostrando a sua área em m². O programa também
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
- Acima de 500m² = TERRENO VIP
*/

const calcArea = (a, l) => a * l;

const classificacao = (a, l) => {
  const area = calcArea(a, l);
  if (area < 100) return "TERRENO POPULAR";
  if (area >= 100 && area <= 500) return "TERRENO MASTER";
  if (area > 500) return "TERRENO VIP";
};

console.log(classificacao(15, 30));
