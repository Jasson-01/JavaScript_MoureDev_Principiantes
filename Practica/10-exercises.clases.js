/*
Clase 39 - Ejercicios:Clases teorica 12 y 13
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class monstruo {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    static saludar() {
        console.log("Hola, soy un monstruo");
    }

}

// 2. Añade un método a la clase que utilice las propiedades
// prototype se usa para añadir métodos a la clase fuera de su declaración. 
monstruo.prototype.mostrarInfo = function() {
    console.log(`El monstruo se llama ${this.nombre} y tiene ${this.edad} años.`);
}

// 3. Muestra los valores de las propiedades e invoca a la función
let monstruo1 = new monstruo("Gorgo", 300);
monstruo1.mostrarInfo();

// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático
monstruo.saludar();

// 6. Crea una clase que haga uso de herencia
class Dragon extends monstruo {

    poder() {
         console.log("Lanzar mucho fuego!!!")
    }
}

// Para usar las clases tengo que crear una instancia de la clase en una variable, luego la variable es un objeto que tiene las propiedades y métodos de la clase.
let myMonster = new Dragon("Zafiro",707);
myMonster.mostrarInfo();
myMonster.poder();

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 