# 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
# fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
# já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
# quantos dias de vida um fumante perderá e exiba o total em dias.

qntCigarrosPorDia = int(input("Quantos cigarros você fuma por dia: "))
qntAnosFumando = int(input("Quantos anos fazem que você fuma: "))
anosParaDias = qntAnosFumando * 365
qntCigarrosJaFumadosEmAnos = anosParaDias * qntCigarrosPorDia

vidaPerdidaEmMinutos = qntCigarrosJaFumadosEmAnos * 10
vidaPerdidaEmDias = (vidaPerdidaEmMinutos / 60) / 24

print(f"A quantidade de cigarros que ele já fumou foi de {qntCigarrosJaFumadosEmAnos}")
print(f"Infelizmente, você já perdeu {round(vidaPerdidaEmDias, 2)} dias de vida fumando {qntCigarrosPorDia} cigarros por dia, por {qntAnosFumando} anos.")
