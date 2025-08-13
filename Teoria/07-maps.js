/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración
// Estructura de datos que almacena pares clave-valor

let myMap = new Map()

console.log(myMap)

// Inicialiación
// Un Map se puede inicializar con un array de arrays, donde cada sub-array contiene dos elementos: la clave y el valor.

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set
// Añadir o actualizar un par clave-valor en el Map

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get
// Obtener el valor asociado a una clave específica

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has
// Comprobar si una clave existe en el Map

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete
// Eliminar un par clave-valor del Map

myMap.delete("email")

console.log(myMap)

// keys, values y entries
// keys: devuelve un iterador con las claves del Map
// values: devuelve un iterador con los valores del Map
// entries: devuelve un iterador con los pares clave-valor del Map

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)