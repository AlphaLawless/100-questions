# 12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
# PREÇO PROMOCIONAL, com 5% de desconto.

print("Produto com 5% de desconto!")
produto = float(input("Por favor digite o preço do produto: "))
comDesconto = float(produto) - float(produto * (5 / 100))
print(f"O produto de preço R$ {produto} reais com 5% de desconto fica igual a: R$ {comDesconto} reais")
