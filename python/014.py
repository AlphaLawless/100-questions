# 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
# um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
# quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
# sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

qntKm = float(input("Quantos Km percorridos o carro fez: "))
qntDias = int(input("Por quantos dias você alugou o carro: "))
precoTotal = float((qntKm * 0.2) + (qntDias * 90))
print(f"O valor total a pagar que você teve por rodar por {qntKm} Km e alugado por {qntDias} dias foi de R$ {precoTotal} reais")
