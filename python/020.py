# 20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
# ÍMPAR.

numero_inteiro = int(input("Digite um número: "))

if numero_inteiro % 2 == 0:
    print(f"O número {numero_inteiro} é PAR!")
else:
    print(f"O número {numero_inteiro} é ÍMPAR!")
