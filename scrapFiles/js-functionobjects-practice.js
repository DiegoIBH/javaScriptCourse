//Objetos en JS
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@gmail.com",
    edad: 28,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
};
/* Short cut a un objecto
let persona2 = new Object();
persona2.nombre = "Alberto";
persona2.apellido = "Prado";
persona2.direccion = "Saturno 15";
persona2.telefono = 6677321112; */

//for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
} 

persona.tel = "6677321112";
persona.tel = "672039"
console.log(persona);

delete persona.tel;
console.log(persona);

//mostrar valores como array

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

//Utilizar get y set

let persona2 = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@gmail.com",
    edad: 28,
    idioma: "mx",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona2.lang);
console.log(persona2.nombreCompleto);

persona2.lang = "ca";
console.log(persona2.lang);
console.log(persona2.idioma);

//Funciones constructores de objectos tipo persona

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.appellido = apellido;
    this.email = email;
}
let padre = new Persona("Juan","Perez","jperez@gmail.com");
console.log(padre);

let madre = new Persona("Elisa", "Campos", "ecampos@gmail.com");
console.log(madre);

padre.nombre = "Carlos";
console.log(padre.nombre);

//Metodos dentro de metodo constructor de objectos

function Persona2(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    };
};

let hermano = new Persona2("Ernesto", "Alcantara", "ealcantara@gmail.com");
console.log(hermano.nombreCompleto());

//Diferentes formas de crear objectos
let miObjecto = new Object();
let miObjecto2 = {};
let miArray = new Array();
let miArray2 = [];
let miFunction = new Function();
let miFunction2 = function(){};
let miCadena1 = new String("Hola");

//Prototype - Se utiliza para agregar nuevas variables en la funcion constructor 
padre.tel = "6677321111";
 // se quiere agregar tel, pero esta solo se crea pero no es parte del constructor (no se puede reutilizar tanto para madre como para padre).
Persona.prototype.tel = "6677321112";
console.log(padre);

// Metodo Call
let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel) {
        return titulo +": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}
let persona3 = {
    nombre: "Carlos",
    apellido: "Lara",
}

// Metodo Call - Como utilizar el metodo nombreCompleto en persona3
persona1.nombreCompleto.call(persona3);
console.log(persona1.nombreCompleto.call(persona3));

//Metodo Apply - Los argumentos no se pasan directamente si no a traves de un array. 
console.log(persona1.nombreCompleto("Lic", "667772535"));
let arreglo = ["Ing", "667774863"];
console.log(persona1.nombreCompleto.apply(persona3, arreglo))