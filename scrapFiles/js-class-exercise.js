class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad;
    }
    todosDatosPersona(){
        return this.idPersona + " " + this.nombre + " " + this.apellido + " " + this.edad;
    }
    toString(){
        return this.todosDatosPersona();
    }
}

class Empleado extends Persona{
    static contadorEmpleado = 0;
    constructor (nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    todosDatosEmpleado(){
        return super.todosDatosPersona() + " " + this.idEmpleado + " " + this.sueldo;
    }
    toString(){
        return this.todosDatosEmpleado();
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    todosDatosCliente(){
        return super.todosDatosPersona() + " " + this.idCliente + " " + this.fechaRegistro;
    }
    toString(){
        return this.todosDatosCliente();
    }
    
}



let persona1 = new Persona("Alonso", "Cabrera", 18);
let persona2 = new Persona("Alberto", "Cabrera", 20);
console.log(persona2.toString());
let empleado1 = new Empleado("Alonso", "Cabrera", 18, 20000)
console.log(empleado1.toString());
let cliente1 = new Cliente("Alberto", "Cabrera", 20, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente("Alberto", "Cabrera", 20, new Date());
console.log(cliente2.toString());