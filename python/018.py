# 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
# dela e depois mostre se ela pode ou não votar.

ano_de_nascimento = int(input("Qual o ano de nascimento da pessoa X: "))
idade = 2022 - ano_de_nascimento

if idade >= 16 and idade < 18 or idade > 70:
    print("Você tem o direito de votar, mas não é obrigatório!")
elif idade >= 18 and idade < 70:
    print("Você tem o direito obrigatório de votar!")
else: 
    print("Você não tem direito de votar ainda!")

