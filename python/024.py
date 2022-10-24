# 24) Faça um algoritmo que pergunte a distância que um passageiro deseja
# percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
# viagens até 200Km e R$0.45 para viagens mais longas.

distancia = float(input("Qual a distância que você deseja percorrer em Km: "))

if distancia > 200:
    preco_da_passagem = distancia * 0.45
    print(f"O preço da passagem para {distancia} km percorridos é de R$ {preco_da_passagem} reais.")
else:
    preco_da_passagem = distancia * 0.5
    print(f"O preço da passagem para {distancia} km percorridos é de R$ {preco_da_passagem} reais.")

