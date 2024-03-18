// Sentecia "if"
let miNumero = 10;

if(miNumero > 0){
    console.log(`Es positivo el num: ${miNumero}`);
}

//Sentecia if else Ex. Revisar si el numero es positivo
let miNumero1 = 10;

if(miNumero1 > 0){
    console.log(`Valor positivo ${miNumero1}`);
}
else{
    console.log("Por favor, ingresar numero positivo");
}
// Else if else - cuando necesitas mas condisiones para el resultado final Ex. (usare la variable de arriva para el ejemplo)
let miNumero2 = -10;
/*
if(miNumero2 > 0){
    console.log(`Valor positivo ${miNumero1}`);
}
else if(miNumero2 < 0){
    console.log(`Valor negativo ${miNumero2}`);
}
else{
    console.log(`Este numero es ${miNumero2}`) ;
}
*/
// Opreador ternario - Simplificado de solo 1 linea de codigo
(miNumero2 > 0) ? console.log(`Positivo`) : console.log(`Negativo`);

//Algoritmo Mayor de Edad
const EDAD_ADULTO = 18;
let edadPersona = 40;
// Revisar si la persona es mayor de edad
if(edadPersona >= EDAD_ADULTO){
    console.log(`A beber se ha dicho!`);
}
else {
    console.log(`Lo siento tienes ${edadPersona}, eso no son ${EDAD_ADULTO}`);
}


    let today = new Date();
    console.log(today);
    let yearsOld = today.getFullYear();
    console.log(yearsOld);