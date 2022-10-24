# 100 Questiões de Lógica resolvidas em [Python]()

1. Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"

```py
print("Olá, mundo!")
```

2. Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas para ela. Ex:
   Qual é o seu nome? João da Silva
   Olá João da Silva, é um prazer te conhecer!

```py
name = input("Digite seu nome: ")
print(f'Olá {name}, é um prazer te conhecer!')
```

3. Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem. Ex:
   Nome do Funcionário: Maria do Carmo
   Salário: 1850,45
   O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

```py
print("Programa para ler o nome e salário de um funcionário\n")
nome_do_funcionario = input("Digite o nome do funcionário: ")
salario = input("Digite o salário: ")
mes = input("Digite o mês que estamos: ")
print(f"O funcionário {nome_do_funcionario} tem um salário de R$ {salario} em {mes}.")
```

4. Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles. Ex:
   Digite um valor: 8
   Digite outro valor: 5
   A soma entre 8 e 5 é igual a 13.

```py
valor_1 = input("Digite um valor: ")
valor_2 = input("Digite outro valor: ")
soma = int(valor_1) + int(valor_2)
print(f"A soma entre {valor_1} e {valor_2} é igual a {soma}.")
```

5. Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina. Ex:
   Nota 1: 4.5
   Nota 2: 8.5
   A média entre 4.5 e 8.5 é igual a 6.5

```py
nota_1 = input("Primeira nota do aluno x: ")
nota_2 = input("Segunda nota do aluno x: ")
media = (float(nota_1) + float(nota_2)) / 2
print(f"A média entre {nota_1} e {nota_2} é igual a {media}")
```

6. Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor. Ex:
   Digite um número: 9
   O antecessor de 9 é 8
   O sucessor de 9 é 10

```py
num = input("Digite um número para ver seu sucessor e antecessor: ")
antecessor = int(num) - 1
sucessor = int(num) + 1
print(f"O antecessor de {num} é {antecessor}.")
print(f"O sucessor de {num} é {sucessor}.")
```

7. Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte. Ex:
   Digite um número: 3.5
   O dobro de 3.5 é 7.0
   A terça parte de 3.5 é 1.16666

```py
num_real = input("Digite um número: ")
dobro = float(num_real) * 2
terca = float(num_real) / 3
print(f"O dobro de {num_real} é {dobro}.")
print(f"A terça parte de {num_real} é {round(terca, 5)}.")
```

8. Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas. Ex:
   Digite uma distância em metros: 185.72
   A distância de 85.7m corresponde a:
   0.18572Km
   18.572Dam
   1.8572Hm
   1857.2dm
   18572.0cm
   185720.0mm

```py
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
```

9. Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares
   ela pode comprar. Considere US$1,00 = R$3,45.

```py
carteira = input("Digite quanto você tem na carteira: ")
dollar = float(carteira) * 3.45
print(f"O valor de R$ {carteira} na sua carteira vale {dollar} dolares.")
```

10. Faça um algoritmo que leia a largura e altura de uma parede, calcule e mostre a área a ser
    pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de
    tinta pinta uma área de 2metros quadrados.

```py
altura = input("Qual a altura da parede em metros: ")
largura = input("Qual a largura da parede em metros: ")
area = float(altura) + float(largura)
tinta = area / 2

print(f"Você vai precisar pintar uma area de {area}m² e para isso é necessário {round(tinta)}L de tinta.")
```

11. Desenvolva uma lógica que leia os valores de A, B e C de uma equação do segundo grau e mostre o valor de Delta.

```py
print("Equação de segundo 2ª Grau")
print("ax² + bx + c = 0")
a = int(input("Digite o valor de A: "))
b = int(input("Digite o valor de B: "))
c = int(input("Digite o valor de C: "))

print("Calculando delta..")
delta = b**2 -(4 * a * c)
print(f"Delta é igual a {delta}")
```

12. Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto.

```py
print("Produto com 5% de desconto!")
produto = float(input("Por favor digite o preço do produto: "))
comDesconto = float(produto) - float(produto * (5 / 100))
print(f"O produto de preço R$ {produto} reais com 5% de desconto fica igual a: R$ {comDesconto} reais")
```

13. Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.

```py
salario = float(input("Digite o atual salário do funcionário X: "))
aumento = salario + (salario * (15 / 100))
print(f"O novo salário do funcionário X com 15% de aumento fica igual a R$ {aumento} reais.")
```

14. A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

```py
qntKm = float(input("Quantos Km percorridos o carro fez: "))
qntDias = int(input("Por quantos dias você alugou o carro: "))
precoTotal = float((qntKm * 0.2) + (qntDias * 90))
print(f"O valor total a pagar que você teve por rodar por {qntKm} Km e alugado por {qntDias} dias foi de R$ {precoTotal} reais")
```

15. Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

```py
diasTrabalhados = int(input("Quantos dias você trabalhou neste mês: "))
if diasTrabalhados > 31:
    print("Você não pode trabalhar mais que 31 dias em um mês!")
else:
    horasT`abalhadas = diasTrabalhados * 8
    salario = horasTrabalhadas * 25
    print(f"O salário do funcionário X que trabalhou por {diasTrabalhados} dias foi de R$ {salario} reais.")
```

16. [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

```py
qntCigarrosPorDia = int(input("Quantos cigarros você fuma por dia: "))
qntAnosFumando = int(input("Quantos anos fazem que você fuma: "))
anosParaDias = qntAnosFumando * 365
qntCigarrosJaFumadosEmAnos = anosParaDias * qntCigarrosPorDia

vidaPerdidaEmMinutos = qntCigarrosJaFumadosEmAnos * 10
vidaPerdidaEmDias = (vidaPerdidaEmMinutos / 60) / 24

print(f"A quantidade de cigarros que ele já fumou foi de {qntCigarrosJaFumadosEmAnos}")
print(f"Infelizmente, você já perdeu {round(vidaPerdidaEmDias, 2)} dias de vida fumando {qntCigarrosPorDia} cigarros por dia, por {qntAnosFumando} anos.")
```

17. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

```py
velocidade = float(input("Qual a velocidade de um carro: "))
if velocidade > 80:
    print("Você acaba de passar da velocidade permitida, por isso foi multado!")
    multa = (velocidade - 80) * 5
    print(f"O valor da multa é de R$ {round(multa, 2)} reais.")
else:
    print(f"Você está a uma velocidade {round(velocidade, 2)} Km/h")
```

18. Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.

```py
ano_de_nascimento = int(input("Qual o ano de nascimento da pessoa X: "))
idade = 2022 - ano_de_nascimento

if idade >= 16 and idade < 18 or idade > 70:
    print("Você tem o direito de votar, mas não é obrigatório!")
elif idade >= 18 and idade < 70:
    print("Você tem o direito obrigatório de votar!")
else:
    print("Você não tem direito de votar ainda!")
```

19. Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0).

```py
nome_aluno = input("Qual o nome do aluno: ")
nota_1 = float(input(f"Qual a primeira nota do aluno {nome_aluno}: "))
nota_2 = float(input(f"Qual a segunda nota do aluno {nome_aluno}: "))

media = (nota_1 + nota_2) / 2
if media > 7:
    print(f"O aluno {nome_aluno} ficou acima da média com {media} de média.")
else:
    print(f"O aluno {nome_aluno} ficou abaixo da média com {media} de média.")
```

20. Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou ÍMPAR.

```py
numero_inteiro = int(input("Digite um número: "))

if numero_inteiro % 2 == 0:
    print(f"O número {numero_inteiro} é PAR!")
else:
    print(f"O número {numero_inteiro} é ÍMPAR!")
```
