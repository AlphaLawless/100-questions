# 11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
# segundo grau e mostre o valor de Delta.

print("Equação de segundo 2ª Grau")
print("ax² + bx + c = 0")
a = int(input("Digite o valor de A: "))
b = int(input("Digite o valor de B: "))
c = int(input("Digite o valor de C: "))

print("Calculando delta..")
delta = b**2 -(4 * a * c)
print(f"Delta é igual a {delta}")

