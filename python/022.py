# 22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
# situação em relação ao alistamento militar.
# - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
# alistamento.
# - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
# alistamento.
import datetime

ano_de_nascimento = int(input("Digite o ano de nascimento do rapaz X: "))
idade = int(datetime.date.today().year) - ano_de_nascimento

if idade < 18:
    print(f"Você tem somente {idade} ainda falta {18 - idade} anos para você se alistar.")
elif idade > 18:
    print(f"Você já tem {idade} e já se passaram {idade - 18} anos do seu ano de alistamento.")
else:
    print(f"Você ainda não tem idade para se alistar.")
