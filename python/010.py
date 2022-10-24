# 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
# mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
# sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

altura = input("Qual a altura da parede em metros: ")
largura = input("Qual a largura da parede em metros: ")
area = float(altura) + float(largura)
tinta = area / 2

print(f"Você vai precisar pintar uma area de {area}m² e para isso é necessário {round(tinta)}L de tinta.")

