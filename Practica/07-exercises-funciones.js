/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
//function suma(a,b){
//    sum = a+b;
//    console.log(sum);
//}
//suma(7,6) --> 13

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
// function obtenerMaximo(arr) {
//   let max = 0;
//   arr.forEach((element) => {
//     if (element >= max) {
//       max = element;
//     }
//   });
//   console.log(max);
// }
// let myArray = [1, 2, 3, 4, 5, 223, 1, 6785, 345, 23, 1234];
// obtenerMaximo(myArray);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
// function cantVocales(str){
//     for(let caracter of str ){
//         if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u" || caracter == "A" || caracter == "E" || caracter == "I" || caracter == "O" || caracter == "U"){
//             console.log(caracter);
//         }
//     }
// }
// let myString = "furgoneta"
// cantVocales(myString);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
// function arrayMayus(arr) {
//   let nuevo = [];
//   for (let i = 0; i < arr.length; i++) {
//     nuevo.push(arr[i].toUpperCase());
//   }
//   console.log(nuevo);
//   return nuevo;
// }
// let myArrayStrings = ["hola", "adios", "perro", "gato", "dino"];
// arrayMayus(myArrayStrings);

//--------------------------2DA FORMA
// function arrayMayus(arr) {
//   return arr.map((e) => e.toUpperCase());
// }
// let myArrayStrings2 = ["hola", "adios", "perro", "gato", "dino"];
// console.log(arrayMayus(myArrayStrings2));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
// function esPrimo(num){
//     let divisor = num;
//     let divisores = [];
//     while (divisor > 0) {
//         if(num % divisor == 0){
//             divisores.push(divisor)
//         }
//         divisor--
//     }
//     // console.log(divisores);
    
//     if(divisores.length == 2){
//         return true 
//     } 
//     return false
// }
// console.log(esPrimo(13));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos "comunes" entre ambos
// function elementosCompartidos(array1,array2){
//     let nuevoArray = [];
//     for( let e of array2){
//         if( array1.includes(e)){
//            nuevoArray.push(e)  
//         }
//     }
//     return nuevoArray
// }
// let arr1 = [1,2,3,4,5];
// let arr2 = [3,4,5,65,7];
// console.log(elementosCompartidos(arr1,arr2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
// function sumaPares(arr){
//     let sumaAcumulada = 0;
//     for(let e of arr){
//         if(e % 2 == 0){
//           sumaAcumulada += e;
//         }
//     }
//     return sumaAcumulada;
// }
// let myArray7 = [1,2,3,4,5,6,7,8,9,10];
// console.log(sumaPares(myArray7));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
// function alCuadrado(arr){
//   let nuevoArr = [];
//    for( let e of arr){
//       nuevoArr.push(e**2);
//    }
//    return nuevoArr;
// }
// let array8 = [1,2,3,4,5];
// console.log(alCuadrado(array8));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
// function cadenaInversa(cadena){
//   let nuevaCadena = "";
//   for(let i = cadena.length - 1; i >= 0; i--){
//       nuevaCadena += cadena[i];
//   }
//   return nuevaCadena;
// }
// // let cadena9 = "Ciudad de Buenos Aires";
// let cadena9 = "Peru";
// console.log(cadenaInversa(cadena9));

// 10. Crea una función que calcule el factorial de un número dado
function factorial(n){
   let fact = 1;
   if(n == 0) {
     return 1 
   } else if (n == 1) {
     return 1
   } else {
     fact = n * factorial(n-1);
   }
   return fact;
}
console.log(factorial(5)) // 120
