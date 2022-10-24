# 25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
# Analise seus comprimentos e diga se é possível formar um triângulo com essas
# retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
# de cada lado deve ser menor que a soma dos outros dois.

primeiro_seg = int(input("Primeiro segmento de reta (A---B): "))
segundo_seg = int(input("Segundo segmento de reta (C---D): "))
terceiro_seg = int(input("Terceiro segmento de reta (E---F): "))

com_1 = primeiro_seg < (segundo_seg + terceiro_seg)
com_2 = segundo_seg < (primeiro_seg + terceiro_seg)
com_3 = terceiro_seg < (primeiro_seg + terceiro_seg)

print(f"1ª Segmento AB: {primeiro_seg}")
print(f"2ª Segmento CD: {segundo_seg}")
print(f"3ª Segmento EF: {terceiro_seg}")

if com_1 and com_2 and com_3:
    print("\nÉ possível formar um triângulo!")
else:
    print("\nNão é possível formar um triângulo!")
