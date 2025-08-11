/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "uno, ";
let cadena2 = "dos";
let cadena3 = "tre";
console.log(cadena1 + cadena2) 

// 2. Muestra la longitud de una cadena de texto
console.log(cadena2.length)

// 3. Muestra el primer y último carácter de un string
console.log(`Primer y ultimo caracter del string "dos": ${cadena2[0]},${cadena2[2]}`)

// 4. Convierte a mayúsculas y minúsculas un string
console.log(`Mayuscula de "cadena1": ${cadena1.toUpperCase()}`)
console.log(`Minuscula de "cadena1": ${cadena1.toLowerCase()}`)

// 5. Crea una cadena de texto en varias líneas
console.log(`Esto es un
ejemplo
de varias 
lineas
en 
javaScript, locura ;D`)

// 6. Interpola el valor de una variable en un string
let viento = "viento";
let losCuatroElementos = `los cuatro elementos: el agua, el fuego, la tierra y el ${viento}`;
console.log(losCuatroElementos); 

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let spaceGuiones = "Reemplazo los espacios en blanco por guiones, mi kiones, XD";
console.log(spaceGuiones.replace(/ /g,"_")); // Uso la bandera global g para reemplazar en todos los espacios en blanco del string, / / define una expresión regular que busca espacios.

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(spaceGuiones.includes("XD"));

// 9. Comprueba si dos strings son iguales
let sonIguales = cadena1 === cadena2
console.log(sonIguales);

// 10. Comprueba si dos strings tienen la misma longitud
let sonIgualesLongitud = cadena2.length === cadena3.length
console.log(sonIgualesLongitud);