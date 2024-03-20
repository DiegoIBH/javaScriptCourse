//Array en JS
let arrayNum = [];
//Modificar valores
arrayNum[0] = 13;
arrayNum[0] = 21;
arrayNum[4] = 'hola';
//Leer valores
console.log(`Elemento 1 [0]: ${arrayNum[0]}`);
console.log(`Elemento 3 [0]: ${arrayNum[3]}`);
console.log(`Elemento 4 [0]: ${arrayNum[4]}`);

//Sintaxis simplificada de Array
let arrayNum2 = [13, 21, 4, 0, 62]

console.log(`Elemento 1 [0]: ${arrayNum2[1]}`);
console.log(`Elemento 3 [2]: ${arrayNum2[2]}`);
console.log(`Elemento 4 [3]: ${arrayNum2[4]}`);

//Iterar elementos de Array con Ciclos (mas conveniente con "For")
//nota: el Array es un objeto al cual se le pueden anadir atributos y metodos
let sumWithArray = 3;
for(let i = 0; i < arrayNum2.length; i++){
    let newArrValue = sumWithArray + arrayNum2[i];
    console.log(`Array [${i}] = ${arrayNum2[i]}`);
    console.log(newArrValue)
};

