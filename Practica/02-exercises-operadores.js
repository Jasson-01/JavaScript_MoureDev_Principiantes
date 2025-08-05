/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 30;
let b = 2;
const suma = a + b; // Suma
const resta = a - b; // Resta  
const multiplicacion = a * b; // Multiplicación
const division = a / b; // División 
const modulo = a % b; // Módulo
const exponenciacion = a ** b; // Exponenciación

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
a += b; // Asignación de suma
b *= 2; // Asignación de multiplicación
a -= 5; // Asignación de resta
b /= 2; // Asignación de división
a %= 3; // Asignación de módulo
b **= 2; // Asignación de exponenciación

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log( 1 == 1)
console.log( 1 != 5000)
console.log( "hola" === "hola")
console.log( 12.45 < 13.999999 )
console.log( 564.56 > 234.99999)
console.log( undefined == null)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log( 1 == 2)
console.log( 1 != 1)
console.log( "hola" === "adios")
console.log( 4 < 2.22)
console.log( 3 >= 7.9999 )
console.log( undefined === null)

// 5. Utiliza el operador lógico and
let c = "a"
let d = 7
let e = "b"
let f = 21
console.log(f-d && c!=e)
// 6. Utiliza el operador lógico or
console.log(d<f || c==e)
// 7. Combina ambos operadores lógicos
console.log( c != e && d != f)
// 8. Añade alguna negación
console.log(!true)
// 9. Utiliza el operador ternario
const binario = 0;
const binarioSigno = ( binario === 1) ? "Es negativo" : "Es positivo!";
console.log("significa:", binarioSigno);
// 10. Combina operadores aritméticos, de comparáción y lógicas

const eval = 7**2 + 7 == 56 && 1000 % 2 == 0;
console.log(eval);