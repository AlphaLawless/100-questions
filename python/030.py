# 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
# de triângulo será formado:
# - EQUILÁTERO: todos os lados iguais
# - ISÓSCELES: dois lados iguais
# - ESCALENO: todos os lados diferentes

segmento_1 = int(input("Digite o primeiro segmento (AB): "))
segmento_2 = int(input("Digite o segundo segmento (CD): "))
segmento_3 = int(input("Digite o terceiro segmento (EF): "))

ab_maior = segmento_1 < (segmento_2 + segmento_3)
cd_maior = segmento_2 < (segmento_1 + segmento_3)
ef_maior = segmento_3 < (segmento_1 + segmento_2)

is_triangulo = ab_maior and cd_maior and ef_maior

is_equilatero = segmento_1 == segmento_2 and segmento_1 == segmento_3
is_isosceles = segmento_1 == segmento_2 or segmento_1 == segmento_3
is_escaleno = segmento_1 != segmento_2 and segmento_1 != segmento_3

if is_triangulo:
    if is_equilatero:
        print("Com os segmentos que você informou foi possível fazer um triângulo EQUILÁTERO: todos os lados iguais")
    elif is_isosceles:
        print("Com os segmentos que você informou foi possível fazer um triângulo ISÓSCELES: dois lados iguais")
    elif is_escaleno:
        print("Com os segmentos que você informou foi possível fazer um triângulo ESCALENO: todos os lados diferentes")
else:
    print("Infelizmente os segmentos que você informou não é possível formar um triângulo!")
