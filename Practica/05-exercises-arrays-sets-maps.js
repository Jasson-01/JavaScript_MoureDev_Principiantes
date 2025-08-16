/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animals5 = []; 
animals5 = ["Dog", "Cat", "sheep", "Elephant", "rooster"];

// 2. Añade dos más. Uno al principio y otro al final
animals5.unshift("Horse");
animals5.push("Cow")
//console.log(typeof(animals5));  //object

// 3. Elimina el que se encuentra en tercera posición
animals5.splice(2,1)
//console.log(animals5); // Se elimino "Cat" :c

// 4. Crea un set que almacene cinco libros
let miSet = new Set();
//console.log(miSet)
miSet = new Set(["La isla del tesoro", "Romeo y Julieta", "El resplandor", "Orgullo y prejuicio", "Mil soles espléndidos" ])
//console.log(miSet)
// 5. Añade dos más. Uno de ellos repetido
miSet.add("El conde de Montecristo");
miSet.add("Edipo Rey");
miSet.add("Edipo Rey");
//console.log(miSet)

// 6. Elimina uno concreto a tu elección
miSet.delete("Edipo Rey")
//console.log(miSet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let mesNumber = new Map();
//console.log(mesNumber);

mesNumber = new Map([[1,"enero"],[2,"febrero"],[3,"marzo"],[4,"abril"],[5,"mayo"],[6,"junio"],[7,"julio"],[8,"agosto"],[9,"septiembre"],[10,"octubre"],[11,"noviembre"],[12,"diciembre"]])
//console.log(mesNumber)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
mes5 = mesNumber.get(5)
//console.log(mes5)

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mesNumber.set("meses de verano:",["Diciembre","Enero","Febrero"]);
//console.log(mesNumber)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = []
myArray = new Set()
myArray = new Map()
console.log(myArray)