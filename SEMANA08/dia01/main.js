//console.log('hola JASON')

//FUNCIONES SIN PARAMETROS
function nombreDelaFuncion(){

    console.log(1+2)
}


nombreDelaFuncion()

// FUNCIOES CON RETORNO
function carcularEsmayo(edad = 20){
    if(edad>18){ 
        return 'es mayor de edad'
    }else{
        return 'es menor de edad'
    }

}
console.log(carcularEsmayo())


//ARROW FUNCTIONS 
const imprimiendoSaludo = () => console.log('Hola a todos nuevamente')

imprimiendoSaludo()

//funciones con paramatros en una linea
const sumacalculada=(numero1 , numero2)=> numero1 + numero2

console.log(sumacalculada(10,15))


//funcioes con parametros y retornos en multiples lineas

const SaludoEnMayusculas = (nombre,apellido) => {

    const nombreEnMayusculas = nombre.toUpperCase()
    const apellidoEnMayusculas = apellido.toUpperCase()


    return 'Hola tu nombre en mayuscula es : ' + nombreEnMayusculas + ' ' + apellidoEnMayusculas
}

console.log(SaludoEnMayusculas('ana','beltran'))


//funciones con parametros por defecto y en multiples lineas


const SaludoEnMayusculas_anonimo = (nombre='Anonimo!',apellido='Anonimo!') => {

    const nombreEnMayusculas = nombre.toUpperCase()
    const apellidoEnMayusculas = apellido.toUpperCase()


    return 'Hola tu nombre en mayuscula es : ' + nombreEnMayusculas + ' ' + apellidoEnMayusculas
}

console.log(SaludoEnMayusculas_anonimo())
console.log(SaludoEnMayusculas_anonimo('Jason','Concepcion'))


//PARAMETROS RES (OPERADOR REST -> ...)
const numeros = [4 ,20]
function miSuma(n1,n2){
    return n1+n2
}
console.log(miSuma(...numeros))

//PARAMETROS RES (OPERADOR REST -> ...) DIVERSOS NUMEROS

const ListadeNumeros =[6,22,55,11,-66,453]
console.log(
    Math.min(...ListadeNumeros) +'\n'+
    Math.max(...ListadeNumeros)
)


//SPREAD OPERATOR(..)
// SIRVE PARA EXPANDIR UN ARREGLO INCLUSO OBJETOS

const frutas = ['Manzanas','Naranjas','Platanos','Sandias']
const Verduras = ['Papas', 'Cebollas']

const frutasYVerduras=[...frutas,...Verduras]


console.log(frutas)
console.log(Verduras)
console.log(frutasYVerduras)


const person = {
    nombre: 'jason',
    apellido: 'concepcion',
    edad: '28',
    color:'azul'
}
const stack = {
    javascript: 'Reacts.js',
    python: 'Django',
    nodejs: 'Express.js'
}

//insertar informacion desde metodo res
const PersonaYsusStack = {
    ...person,
    ...stack
}
console.log(PersonaYsusStack)


//otra forma de mostras claves evitar coliziones por su clave valor
const PersonaYsusStack2 = {
    person,
    stack
}

console.log(PersonaYsusStack2)