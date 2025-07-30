/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
const comentario1 = "Este es un comentario en una línea";

// 2. Escribe un comentario en varias líneas
const comentario2 = `Este es un comentario 
en varias líneas`;
console.log(comentario2);
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myName = "Ana"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let undefinedValue; // Undefined
let nullValue = null; // Null
let mySymbol = Symbol("mySymbol"); // Symbol
let myBigInt = BigInt(123456789012345678901234567890); // BigInt
let myBigInt2 = 123456789012345678901234567890n; // BigInt (otra forma)

// 4. Imprime por consola el valor de todas las variables
console.log("Nombre:", myName);
console.log("Edad:", age);
console.log("Es estudiante:", isStudent);
console.log("Valor indefinido:", undefinedValue);
console.log("Valor nulo:", nullValue);
console.log("Símbolo:", mySymbol);
console.log("BigInt:", myBigInt);
console.log("BigInt 2:", myBigInt2);

// 5. Imprime por consola el tipo de todas las variables
console.log("Tipo de myName:", typeof myName);
console.log("Tipo de age:", typeof age);
console.log("Tipo de isStudent:", typeof isStudent);
console.log("Tipo de undefinedValue:", typeof undefinedValue);
console.log("Tipo de nullValue:", typeof nullValue);
console.log("Tipo de mySymbol:", typeof mySymbol);
console.log("Tipo de myBigInt:", typeof myBigInt);
console.log("Tipo de myBigInt2:", typeof myBigInt2);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "Jorge"; // String
age = 30; // Number
isStudent = true; // Boolean
undefinedValue; // Undefined
mySymbol = Symbol("mySymbol"); // Symbol
myBigInt = BigInt(123456789012345678901234567899); // BigInt
myBigInt2 = 123456789012345678901234567899n; // BigInt (otra forma)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 7; 
age = "quince"; 
isStudent = null; 
undefinedValue; 
mySymbol = BigInt(123456789012345678901234567899);
myBigInt = Symbol("mySymbol"); 
myBigInt2 = "hola mundo"; 

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myName2 = "Ana"; // String
const age2 = 25; // Number
const isStudent2 = true; // Boolean
const valorIndefinido = undefined; // Undefined
const nullValue2 = null; // Null
const mySymbol2 = Symbol("mySymbol"); // Symbol
const numeroEnteroGrande1 = BigInt(123456789012345678901234567890); // BigInt
const numeroEnteroGrande2 = 123456789012345678901234567890n; // BigInt (otra forma)

// 9. A continuación, modifica los valores de las constantes
//myName2 = "Maria"; // String
//age2 = 23; // Number
//isStudent2 = false; // Boolean
//valorIndefinido = undefined; // Undefined
//nullValue2 = null; // Null
//mySymbol2 = Symbol("mySymbol"); // Symbol
//numeroEnteroGrande1 = BigInt(1234567890123456789012345678998); // BigInt
//numeroEnteroGrande2 = 12345678901234567890123456789098n; // BigInt (otra forma)


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
//console.log("Tipo de myName:", typeof myName2);
//console.log("Tipo de age:", typeof age2);
//console.log("Tipo de isStudent:", typeof isStudent2);
console.log("Tipo de undefinedValue:", typeof valorIndefinido);
console.log("Tipo de nullValue:", typeof nullValue2);
console.log("Tipo de mySymbol:", typeof mySymbol2);
console.log("Tipo de myBigInt:", typeof numeroEnteroGrande1);
console.log("Tipo de myBigInt2:", typeof numeroEnteroGrande2);




// Nota:
// Las constantes no pueden ser reasignadas, por lo que intentar cambiar sus valores generará un error.
// Las variables pueden ser reasignadas, pero deben mantener el tipo de dato original al momento de la declaración.
// En el caso de las constantes, si se intenta cambiar su valor, se generará un error de tipo.

//En conclucsión, este ejercicio te permite practicar la declaración y manipulación de variables y constantes en JavaScript, así como la comprensión de los tipos de datos primitivos. Recuerda que las constantes no pueden ser reasignadas una vez definidas, mientras que las variables sí pueden serlo, pero deben respetar el tipo de dato original al momento de su declaración.
// Además, es importante entender que los tipos de datos primitivos son fundamentales en JavaScript y se utilizan para representar valores simples como cadenas de texto, números, booleanos, etc. Practicar con estos tipos de datos te ayudará a familiarizarte con la sintaxis y las características del lenguaje.