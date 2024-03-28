//Clases en JS - Se define como una plantilla que contine sus atributos y sus metodos y sus instancias son los objetos.

class Persona{ // No se pueden crear objectos (o let) antes de definir nuestra clase... No hoisting.
    static contadorPersonas = 0;
    static get MAX_OBJ(){
        return 5;
    }
    constructor(nombre, apellido){
       /* Nota: La sintaxis de abajo es la normal
       this.nombre = nombre;
        this.apellido = apellido; */
        //Aqui pongo abajo la sintaxis para titlizar estos atributos con los metodos "get" y "set"
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log("No mas personas permitidas");
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    /*get*/ nombreCompleto(){
        return this.idPersona + " " + this._nombre + " " + this._apellido;
    }
    toString(){
            return this.nombreCompleto();
    }
}
class Empleado extends Persona{
    
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // Sobreescritura - Modificar comportamiento de clase padre desde clase hija. 
    /*get*/ nombreCompleto(){
        return super.nombreCompleto() + " " + this._departamento;
    }
   
}

let persona1 = new Persona("Alonso", "Perez");
/*console.log(persona1.toString());
console.log(Persona.contadorObjetosPersona);*/
console.log(persona1.toString());
let empleado1 = new Empleado("Maria", "Perez", "Ventas");
/*empleado1.nombre = "Carlos";
empleado1.apellido = "Lara";
empleado1.departamento = "Contabilidad"
console.log(empleado1.toString());
console.log(Empleado.contadorObjetosPersona);
console.log(empleado1);*/
console.log(empleado1.toString());

let persona2 = new Persona("Berta", "Alvarez");
console.log(persona2.toString());

let persona3 = new Persona("Carla", "Alvarez");
let persona4 = new Persona("Alonso", "Alvarez");
let persona5 = new Persona("Manuel", "Alvarez");