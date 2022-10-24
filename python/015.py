# 15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
# salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
# por hora trabalhada.

diasTrabalhados = int(input("Quantos dias você trabalhou neste mês: "))
if diasTrabalhados > 31: 
    print("Você não pode trabalhar mais que 31 dias em um mês!")
else:
    horasT`abalhadas = diasTrabalhados * 8
    salario = horasTrabalhadas * 25
    print(f"O salário do funcionário X que trabalhou por {diasTrabalhados} dias foi de R$ {salario} reais.")
