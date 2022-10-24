# 27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
# mostrando uma mensagem no final, de acordo com a média atingida:
# - Média até 4.9: REPROVADO
# - Média entre 5.0 e 6.9: RECUPERAÇÃO
# - Média 7.0 ou superior: APROVADO

nota_1 = float(input("Digite a primeira nota do aluno X: "))
nota_2 = float(input("Digite a segunda nota do aluno X: "))

media = (nota_1 + nota_2 ) / 2

if media >= 7:
    print("Média 7.0 ou superior: APROVADO")
elif media >= 5 and media < 7:
    print("Média entre 5.0 e 6.0: RECUPERAÇÃO")
else:
    print("Média até 4.9: REPROVADO")
