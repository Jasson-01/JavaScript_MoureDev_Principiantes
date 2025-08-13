/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set
// Estructura de datos que almacena valores únicos

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete
// Añadir y eliminar elementos del set
// Devuelve el set modificado

mySet.add("https://moure.dev")

console.log(mySet)

mySet.delete("https://moure.dev")

console.log(mySet)

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)

// has
// Comprobar si un elemento existe en el set

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size
// Tamaño del set

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)