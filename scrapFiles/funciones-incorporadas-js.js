//Funciones incorporadas de JS
let cadena1 = "Hola";
console.log(cadena1.length);
//No se pueden cambiar las cadenas en JS (son inmutables)
cadena1[0] = "X";
console.log(cadena1);
//Si se puede asignar un nuevo valor a la variable
cadena1 = "Adios";
console.log(cadena1);
//Usar ciclo "For" para recorrer una string como un array... cada letra 1 posicion.
for (let index = 0; index < cadena1.length; index++) {
    let each = cadena1[index];
    console.log(each);
};

//Subcadenas en JS
let cadena2 = "Hola Mundo";
//substring(indice_inicio, indice_fin - 1) Nota: No inculye el indice fin.
let cadena3 = cadena2.substring(0,4);
console.log(cadena3);
let cadena4 = cadena2.substring(5); //Funcion extrae del indice 5 a el final de la cadena
console.log(cadena4);

//Conactenacion de Cadenas en JS
let cadena5 = cadena3 + " " + cadena4;
console.log(cadena5);

//string Interpolation
let cadena6 = `${cadena1} ${cadena4}`;
console.log(cadena6);

//Convertir de cadena a num en JS
let a = "10", b = "20";
console.log(a + b);
let suma = parseInt(a) + parseInt(b);
console.log(suma);

//Convertir de num a String
let c = 10, d = 20;
console.log(c + d);
let text = c.toString() + d.toString();
console.log(text);

//Valor absoluto en JS
let negNumber = -10;
let absNumber = Math.abs(negNumber);
console.log(absNumber);

//Ejemplo de prubea de metodo String para convertir y substring para agarrar una parte.
/*const todaysDate = String(new Date()).substring(0,15);
console.log(todaysDate);
let onlyDate = todaysDate;
console.log(onlyDate);*/

//Redondeo y truncado
let numeroFlo = 8.5, redondeo, truncado;

//Redondeo - Math.round() redondea al valor entero mas cercano.
redondeo = Math.round(numeroFlo);
console.log(redondeo);

//Truncado
//Math.trunc() elimina la parte flotante.

truncado = Math.trunc(numeroFlo);
console.log(truncado);