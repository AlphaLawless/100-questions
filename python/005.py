# 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.
# Ex:
# Nota 1: 4.5
# Nota 2: 8.5
# A média entre 4.5 e 8.5 é igual a 6.5

nota_1 = input("Primeira nota do aluno x: ")
nota_2 = input("Segunda nota do aluno x: ")
media = (float(nota_1) + float(nota_2)) / 2
print(f"A média entre {nota_1} e {nota_2} é igual a {media}")
