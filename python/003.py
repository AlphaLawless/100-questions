# 3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
# final uma mensagem.
# Ex:
# Nome do Funcionário: Maria do Carmo
# Salário: 1850,45
# O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

print("Programa para ler o nome e salário de um funcionário\n")
nome_do_funcionario = input("Digite o nome do funcionário: ")
salario = input("Digite o salário: ")
mes = input("Digite o mês que estamos: ")
print(f"O funcionário {nome_do_funcionario} tem um salário de R$ {salario} em {mes}.")

