/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let auto = {
    color : "red",
    año : 1988,
    marca: "TOYOTA"
}
// 2. Accede y muestra su valor
for(let e in auto){ // Con objetos se recorre con "in" no con "of", OJO!!!
    console.log(e + ": " + auto[e])
}
// 3. Agrega una nueva propiedad
auto.venta = 56000;
//console.log(auto)

// 4. Elimina una de las 3 primeras propiedades
delete auto.marca;
//console.log(auto)

// 5. Agrega una función e invócala
let suena = function(){
    console.log("run run")
}
auto.suena = suena; //Aquí creas primero "suena" y luego la asignas a "auto.suena". 
//console.log(auto);

// 6. Itera las propiedades del objeto
for(let e in auto){ // Con objetos se recorre con "in" no con "of", OJO!!!
    console.log(e + ": " + auto[e])
}

// 7. Crea un objeto anidado
auto.acciones = { vuela: "El auto puede volar", nada:"El auto puede nadar loco", cambiaForma:"Este auto es un transformer", lanzaMisiles: function(){console.log("fiu fiu")}}
for(let e in auto){ // Con objetos se recorre con "in" no con "of", OJO!!!
    console.log(e + ": " + auto[e])
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(auto.acciones.vuela)
console.log(auto.acciones.nada)
console.log(auto.acciones.cambiaForma)
console.log(auto.acciones.lanzaMisiles)

// 9. Comprueba si los dos objetos creados son iguales
let auto2 = {
    color : "red",
    año : 2000,
    marca: "Audi"
}
console.log(auto === auto2) // false

// 10. Comprueba si dos propiedades diferentes son iguales
console.log( auto.color === auto2.color) //false  (si cambio el color)
console.log( auto.color == auto2.color) //true
