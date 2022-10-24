# 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
# BISSEXTO.

pegar_ano = int(input("Digite o ano para ver se ele é BISSEXTO ou NÃO: "))
if pegar_ano % 4 == 0:
    print(f"O ano {pegar_ano} é BISSEXTO!")
else:
    print(f"O ano {pegar_ano} não é BISSEXTO!")
