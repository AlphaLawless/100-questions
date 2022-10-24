# 32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
# jogador vai tentar descobrir qual foi o valor sorteado.
from random import randint

rand = randint(1,5)

print("A máquina acaba de sortear um número entre 1 e 5, você tem 2 chances para acertar!")

count = 0

while count < 2:
    value = int(input("Adivinhe o número: "))

    if rand == value:
        print("Você acertou!!")
        print(f"O número sorteado realmente foi {rand}.")
    else:
        count += 1
        if count == 1:
            print("\nÚltima chance!")
        else:
            print("\nNão foi dessa vez!")

    




