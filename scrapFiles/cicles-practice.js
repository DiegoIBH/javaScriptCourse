//Ciclos y sus tipos (Verdadero / Falso) que se repite hasta falso
//while - Imprimir valores de 0 a 5
let contador=0, repeticiones=5;
while (contador <= repeticiones){
    console.log(contador++);
};

//do - while: Ejecuta 1 bloque de codigo y pone sentecia en el segundo.
let contador1=0, repeticiones1=5;
do{
    console.log(contador1++);
}
while (contador1 <= repeticiones1){}

// for - controla las veces que queremos repetir el bloque de codigo. 
let repeticion = 6;

for(let contado = 0; contado <= repeticion; contado++) {
    console.log(contado);
}

//Ejercico: Imprimir los primeros 10 num de 3 en 3
let maximo = 10, minimo = -10;
console.log("Incrementos de 3 en 3");
//1 - 4 - 7 - 10
for (let numero = 1; numero <= maximo; numero += 3) {
    console.log(numero);  
}
//1  -2  -5  -8  -11
console.log("Decrementos de 3 en 3");
for (let numero = 0; numero >= minimo; numero -= 3){
    console.log(numero);
}

//Ejercico de suma acumulativa con "for": 1 a 5 = 15
let acumulativa = 5;
let sum = 0;
for (let inicio = 1; inicio <= acumulativa; inicio++){
    console.log(`${sum}+${inicio}`);
    sum += inicio;
    console.log(sum);
};
//Ejercico de suma acumulativa con "while and do while": 1 a 5 = 15
let acumulativa2= 5
let sum2=0;
let inicio2=1;

while (inicio2 <= acumulativa2) {
        sum2 += inicio2;
        inicio2++;
        console.log(sum2);
}
