# 29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
# quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
# acordo com a tabela a seguir:
# - Até 3 anos de empresa: aumento de 3%
# - entre 3 e 10 anos: aumento de 12.5%
# - 10 anos ou mais: aumento de 20%

nome = input("Diga o nome do funcionário X: ")
salario = float(input(f"Digite o salário do funcionário {nome}: "))
anos_na_empresa = int(input(f"Quantos anos o funcionário {nome} trabalha na empresa: "))

reajuste = salario
if anos_na_empresa <= 3:
    reajuste += reajuste * (3 / 100)
    print("Até 3 anos de empresa: Aumento de 3%")
    print(f"- Então seu novo salário é de {reajuste}")
elif anos_na_empresa > 3 and anos_na_empresa < 10:
    reajuste += reajuste * (12.5 / 100)
    print("Entre 3 e 10 anos: aumento de 12.5%")
    print(f"- Então seu novo salário é de {reajuste}")
else:
    reajuste += reajuste * (20 / 100)
    print("10 anos ou mais: aumento de 20%")
    print(f"- Então seu novo salário é de {reajuste}")

