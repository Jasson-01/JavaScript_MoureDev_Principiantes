/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let name1 = "jasson";
if (name1 == "jasson"){
console.log("Soy Jasson")
} else {
    console.log("No soy jasson ;D")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "user1";
let contraseña = 12345;
if( usuario == "user1" && contraseña == 12345){
  console.log("imprimir mensaje")
} else {
    console.log("contraseña/usuario incorrecto")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0;
if ( numero > 0 ) {
    console.log("Numero POSITIVO");
}else if( numero < 0){
    console.log("Numero NEGATIVO");
} else {
    console.log("Numero CERO")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 15;
let ageFaltantes = 18 - age;
if ( age >= 18){
    console.log("Puede VOTAR")
} else {
    console.log(`No puedes votar! Te faltan ${ageFaltantes} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age2 = 12;
(age2 >= 18) ? console.log("Eres adulto") : console.log("Eres menor");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
// Estaciones del año en el Hemisferio Sur
let mes = "Febrero";
(mes == "Diciembre" || mes == "Enero" || mes == "Febrero") ? console.log("Es Verano") : (mes == "Marzo" || mes == "Abril" || mes == "Mayo") ? console.log("Es Otoño") : (mes == "Junio" || mes == "Julio" || mes == "Agosto") ? console.log("Es Invierno") : console.log("Es Primavera");

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
(mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre") ? console.log("Este mes tiene 31 dias") : (mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre") ? console.log("Este mes tiene 30 dias") : console.log("Este mes tiene 29 o 28 dias dependiendo si el año es bisieto o no.")

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let saludo = "Español";
switch(saludo){
    case "Francés":
         console.log("Bonjour");
         break
    case "Italiano":
         console.log("Ciao");
         break 
    case "Japonés":
         console.log("Konnichiwa(こんにちは)")
         break     
    default:
         console.log("Hola! ;D")     
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes9 = "Septiembre";
switch(mes9){
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Es Verano");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Es Otoño");
        break; 
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Es Invierno");
        break;              
    default:
        console.log("Es Primavera")                
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let mes10 = "Septiembre";
switch(mes10){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        console.log("Este mes tiene 31 dias");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log("Este mes tiene 30 dias");
        break; 
    default:
        console.log("Este mes tiene 29 o 28 dias dependiendo si el año es bisieto o no.")                
}