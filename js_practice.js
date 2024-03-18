//Primera definicion de variable
let miNumero1 = 15;
console.log(typeof miNumero1);
// y /* */ se utiliza para hacer notas en multipleas lineas

/* Tipos de datos que para definir varialbes
    Number(numerico y flotante), String, Boolean (true or false), Null(ausencia de referenia) and undefine(ausencia de valor) */

let miString = "hola";
let miBoolean = true;
let miNull = null;
let miUndefined = undefined;
//Definir el dato y el tipo de dato
console.log(miNull);
console.log(typeof miNull);

//Hoisting - con "Var" Se declara e inicializa una variable por separado y te permite inicializar antes de declarar (lo cual no es recomedable) y "let" no te lo permite... lo cual es buena practica. 
let x;
x = 10;
console.log(x);

//Definir constante (NO CAMBIA) usando mayusculas y _ para separar palabras
const MI_CONST = 10;
//MI_CONST = 20; este cambio generara un error en consola
console.log(MI_CONST);
// la const suele ser para numero predeterminados, como seg en un min y el valor de PI.console.log(Math.PI);

function calculateResult() {
    return 2 + 2;
}
