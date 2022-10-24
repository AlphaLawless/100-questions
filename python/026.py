# 26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
# na tela uma das mensagens abaixo:
# - O primeiro valor é o maior
# - O segundo valor é o maior
# - Não existe valor maior, os dois são iguais

numero_1 = float(input("Digite o primeiro valor: "))
numero_2 = float(input("Digite o segundo valor: "))

if numero_1 == numero_2:
    print("Não existe valor maior ou menor, os dois são iguais.")
elif numero_1 > numero_2:
    print("O primeiro valor é o maior!")
elif numero_2 > numero_1:
    print("O segundo valor é o maior!")
else:
    print("Você não informou números válidos!")
