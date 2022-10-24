# 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
# seu novo salário, com 15% de aumento.

salario = float(input("Digite o atual salário do funcionário X: "))
aumento = salario + (salario * (15 / 100))
print(f"O novo salário do funcionário X com 15% de aumento fica igual a R$ {aumento} reais.")
