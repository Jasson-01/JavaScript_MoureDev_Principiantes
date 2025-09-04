/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1,2,3];
let [uno, dos, tres] = myArray;
console.log(uno);
console.log(dos);
console.log(tres);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [a,b,c,d=4] = myArray;
console.log(d);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let animal = {
     nombre : "Bella",
     raza: "CHIHUAUA",
     color: "blanco y negro",
     tamaño: "pequeño",
     edad: 14,
     ladrar: function(){ console.log("uau uau")},
     job: { rol: "Guardiana", time: "24 horas", work: function(){ console.log("Familiar Magico")} }
}
let {nombre, edad} = animal;
console.log(nombre);
console.log(edad);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {nombre: nombre2, edad: edad2} = animal;
console.log(nombre2);
console.log(edad2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let { job : { rol,time,work }} = animal;
console.log(rol)
console.log(time)
console.log(work)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = [...myArray, "a", "b", "c"];
//console.log(myArray2);

// 7. Usa propagación para crear una copia de un array
let myArray3 = [...myArray2];
//console.log(myArray3);

// 8. Usa propagación para combinar dos objetos en uno nuevo
//           Si hay propiedades con el mismo nombre, prevalece la definición que aparezca más a la derecha.
//           Inmutabilidad: Al usar propagación creas un objeto nuevo, sin mutar los originales.

let persona = {
     nombre2: "David",
     apellido: "Stark",
     profesion: "Gamer",
     frase : function(){console.log("Gaaaaaaaaaa...!!!")}
}

let fusionDeObjetos = { ...animal, ...persona };
//console.log(fusionDeObjetos);

// 9. Usa propagación para crear una copia de un objeto
let objectCopy = { ... fusionDeObjetos };
console.log(objectCopy);

// 10. Combina desestructuración y propagación
let {nombre:nombre10, nombre2:nombre20, ladrar, frase} = fusionDeObjetos;
console.log(nombre10);
console.log(nombre20);
ladrar();
frase();
