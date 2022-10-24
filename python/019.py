# 19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
# média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
# não um bom aproveitamento (se ficou acima da média 7.0).

nome_aluno = input("Qual o nome do aluno: ")
nota_1 = float(input(f"Qual a primeira nota do aluno {nome_aluno}: "))
nota_2 = float(input(f"Qual a segunda nota do aluno {nome_aluno}: "))

media = (nota_1 + nota_2) / 2
if media > 7:
    print(f"O aluno {nome_aluno} ficou acima da média com {media} de média.")
else:
    print(f"O aluno {nome_aluno} ficou abaixo da média com {media} de média.")
