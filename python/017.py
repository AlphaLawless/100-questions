# 17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
# 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
# o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

velocidade = float(input("Qual a velocidade de um carro: "))
if velocidade > 80:
    print("Você acaba de passar da velocidade permitida, por isso foi multado!")
    multa = (velocidade - 80) * 5
    print(f"O valor da multa é de R$ {round(multa, 2)} reais.")
else:
    print(f"Você está a uma velocidade {round(velocidade, 2)} Km/h")
