/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
//      for(let num=1; num<21; num++){
//          console.log(num)
//      }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
//          suma100 = 0
//          for(let i=1; i<101; i++){
//              suma100 += i;
//          } 
//          console.log(suma100)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

//for(let i=1; i<51; i++){
//    i += 1
//    console.log(i)
//}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
//let myArrayNames = ["Ana", "Beto", "Carol", "Daniel"]
//for (names of myArrayNames){
//    console.log(names)
//}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
//let string = "Puente Piedra";
//let contador = 0;
//for( caracter of string){
//    contador += 1;
//}
//console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
//let numbersMult = [1,2,3,4,5,6,7,8,9];
//let acumulador = 1;
//for(num of numbersMult){
//    acumulador *= num;
//}
//console.log(acumulador)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
//let multiplicador = 5;
//for( i=0; i<13; i++){
//    let producto = 5*i;
//    console.log(`${multiplicador} * ${i} = ${producto}`)
//}

// 8. Usa un bucle para invertir una cadena de texto
//let text = "Puente Piedra";
//let invertida = "";
// i = text.length - 1 -> empezamos desde el ultimo caracter
// i >= seguimos hasta el primero
//for(let i = text.length - 1; i >= 0; i-- ){
//   invertida += text[i];
//}
//console.log(invertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
// let fibo0 = 0;
// let fibo1 = 1;
// let contador = 10;

// do {
//   console.log(fibo0); // Imprime el número actual
//   let siguiente = fibo0 + fibo1; // Calcula el siguiente número
//   fibo0 = fibo1; // Actualiza fibo0
//   fibo1 = siguiente; // Actualiza fibo1
//   contador--; // Reduce el contador
// } while (contador > 0);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let myNumbers = [1,3,4,5,45,67,32,12,89,34,3,4,56,7,9,0,23,300,15];
let mayoresA10 = [];
for( let i=0; i < myNumbers.length; i++){
    if(myNumbers[i] > 10){
        mayoresA10.push(myNumbers[i]);
    } else {
        continue;
    }
}
console.log(mayoresA10)