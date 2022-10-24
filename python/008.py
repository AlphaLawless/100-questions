# 8) Desenvolva um programa que leia uma distância em metros e mostre os valores
# relativos em outras medidas.
# Ex:
# Digite uma distância em metros: 185.72
# A distância de 85.7m corresponde a:
# 0.18572Km
# 18.572Dam
# 1.8572Hm
# 1857.2dm
# 18572.0cm
# 185720.0mm

m = input("Digite uma distância em metros: ")
km = float(m) / 1000
hm = float(m) / 100
dam = float(m) / 10
dm = float(m) * 10
cm = float(m) * 100
mm = float(m) * 1000

print(f"A distância de {m} corresponde a: ")
print(f"{km} Km")
print(f"{hm} Hm")
print(f"{dam} Dam")
print(f"{dm} dm")
print(f"{cm} cm")
print(f"{mm} mm")
