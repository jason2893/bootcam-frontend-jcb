#Tutorial Python 5: Booleanos, operadores lógicos y cadenas

#comillas simples
casd='texto entre \n comillas simplet'

#comillas dobles
cadd="texto entre \n\t comillas simplet"

#comillas triples
cade=""" 
texto linea1
texto linea1
texto linea1
texto linea1
.
.
.
.
texto linea1

"""

print (casd)
print (cadd)
print (cade)

# concatenas cadenas
print(casd+cadd)

print("---------------")
# concatenas con variable
variable=casd+cadd
print(variable)


# operadores logicas
print("---------------")
BT=True
BF=False

BAnd = True and False
BOr  = True or False
BNot = not True

print (BAnd)