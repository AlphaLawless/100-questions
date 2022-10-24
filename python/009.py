# 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
# e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

carteira = input("Digite quanto você tem na carteira: ")
dollar = float(carteira) * 3.45
print(f"O valor de R$ {carteira} na sua carteira vale {dollar} dolares.")
