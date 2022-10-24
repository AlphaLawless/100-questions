# 23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
# para todos, mas especialmente para mulheres. Faça um programa que leia nome,
# sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
# que:
# - Homens ganham 5% de desconto
# - Mulheres ganham 13% de desconto

nome = input("Digite o seu nome: ")
sexo = input("Digite o seu gênero [F] ou [M]: ")
compras = float(input("Qual o valor das compras R$ "))

if sexo.lower() == 'f':
    print("Mulheres ganham 13% de desconto")
    preco = compras - (compras * (13 / 100))
    print(f"O preço total que você vai pagar é de R$ {preco} reais.")
elif sexo.lower() == 'm':
    print("Homens ganham 5% de desconto")
    preco = compras - (compras * (5 / 100))
    print(f"O preço to tal que você vai pagar é de R$ {preco} reais.")
else:
    print("Você não informou nenhum gênero disponível: ")
