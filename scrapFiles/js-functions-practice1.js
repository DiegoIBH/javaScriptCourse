//FUNCION - La funcion se declara y como utilizaral
// 1paso: Se delcara abajo la funcion.
function imprimir(parametro) {
    console.log(parametro);
    let parametro = 3;
}
//2do paso: Se utiliza la funcion en futuros bolques de codigo y se cambia con cada iteracion o cambio de parametro
imprimir(200); 
imprimir(300);

//Diff entre parametro y argumento -> El argumento se establece fuera de la funcion en nuestro programa principal y toma el valor que le asignes en la variable que substituye al parametro ej. function imprimir (ejVariable){}
let ejVariable = 100;
imprimir(ejVariable);

//Nota: La estructura de la funcion es:  declaracion (parametro){cuerpo}

//Un procedimiento es igual a una funcion pero no retorna un resultado, abajo un ejemplo de funcion (retornando resultado).
function sumar(a, b){
    let resultado = a + b;
    return(resultado);
}

let a = 3, b = 5, c;
c = sumar(a, b);
console.log(c);

//Tipos de Funciones: Funciones definidas por el usuario y Fun ya definidas

//Procedimientos en JS
//1. Definir procedimiento
function saludar(mensaje) {
    console.log(`Mensaje: ${mensaje}`);
}

//2.Llamar el procedimiento
saludar('Hola');

//Funciones en JS
//1-Declarar una funcion
function sumar(a, b){
    let resultadoSuma = a + b;
    return resultadoSuma;
}

//2-Llamar a la funcion
let argA = 5, argB = 5, resultado;
resultado = sumar(argA, argB);
console.log(`Resultado de suma: ${resultado}`);

//Paso valor en JS
//Pasando valor de un tipo primitivo(number, bool, sring)

function cambiarValor1(parametro) {  
    parametro = 20;
}
let argumento = 10;
cambiarValor1(parametro);
console.log(parametro);

//Paso por referencia JS
//Objetos (array) se pasan por referencia
function cambiarValor2(parametro1) {
    parametro1[0] = 20;
}
//Llamamos a la funcion
let array = [10];
cambiarValor2(array);
console.log(array);

//Cadenas y funciones JS
//Cadenas inmutables JS

function cambiarValor3(parametro2) {
    parametro2 = 'Adios';
}
let argumento1 = 'Hola';
console.log(`Antes de cambiar: ${argumento1}`);
cambiarValor3(argumento1);
console.log(`Despues de cambiar: ${argumento1}`);

//Funcion Recursiva JS

function funcionRecursiva(numero) {
    if(numero == 1){
        console.log(numero);
    }
    else{
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}
funcionRecursiva(3);