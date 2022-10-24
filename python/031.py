# 31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
from random import randint

jokenpon = input("Escolha Pedra Papel ou Tesoura: ")

rand = randint(1, 3)

if jokenpon.upper() == "PAPEL":
    if rand == 1:
        print("Vencedor: Você")
        print("Máquina: Pedra")
        print("Você: Papel")
    elif rand == 2:
        print("Vencedor: Máquina")
        print("Máquina: Tesoura")
        print("Você: Papel")
    else:
        print("Vencedor: Empate")
        print("Máquina: Papel")
        print("Você: Papel")
elif jokenpon.upper() == "PEDRA":
    if rand == 1:
        print("Vencedor: Você")
        print("Máquina: Tesoura")
        print("Você: Pedra")
    elif rand == 2:
        print("Vencedor: Máquina")
        print("Máquina: Papel")
        print("Você: Pedra")
    else:
        print("Vencedor: Empate")
        print("Máquina: Pedra")
        print("Você: Pedra")
elif jokenpon.upper() == "TESOURA":
    if rand == 1:
        print("Vencedor: Você")
        print("Máquina: Papel")
        print("Você: Tesoura")
    elif rand == 2:
        print("Vencedor: Máquina")
        print("Máquina: Pedra")
        print("Você: Tesoura")
    else:
        print("Vencedor: Empate")
        print("Máquina: Tesoura")
        print("Você: Tesoura")
else:
    print("[ERROR] Você não informou um tipo válido! Disponíveis são Pedra Papel ou Tesoura.")
    
