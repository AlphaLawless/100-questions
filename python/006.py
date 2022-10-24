# 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
# sucessor.
# Ex:
# Digite um número: 9
# O antecessor de 9 é 8
# O sucessor de 9 é 10

num = input("Digite um número para ver seu sucessor e antecessor: ")
antecessor = int(num) - 1
sucessor = int(num) + 1
print(f"O antecessor de {num} é {antecessor}.")
print(f"O sucessor de {num} é {sucessor}.")
