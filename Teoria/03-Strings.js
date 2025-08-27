/*
Clase 21 - Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=6565
*/

// Strings (cadenas de texto)

// Concatenación

let myName = "Jason";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]);  // res = g

// Metodos comunes
console.log(greeting.toUpperCase()); //Mayusculas
console.log(greeting.toLowerCase()); //Minusculas
console.log(greeting.indexOf("Hola")); //Indice desde donde comienza el string
console.log(greeting.includes("Hola")); //Te dice si la palabra esta en el string (retorna un bool) (Tambien funciona para arrays)
console.log(greeting.slice(0,10)); // Corta una seccion del string y te lo devuelve
console.log(greeting.replace("Hola","Adios")) // Reemplaza la palabra "Hola" por "Adios", solo reemplaza la primera ocurrencia que encuentre no todas si hay la misma en el mismo string.


//Template literals (plantilla literales)

//String en varias líneas
let message = `Hola, este
es mi 
curso de 
JavaScript`
console.log(message);

//Interpolación de valores
let email = "jason.davila001@gmail.com";
console.log(`Hola, ${myName}! Tu email es ${email}`);