
/*
Clase 38 - Herencia de clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=17999
*/

// Herencia
// La herencia es un mecanismo que permite crear una clase a partir de otra clase ya existente, heredando sus propiedades y métodos. Esto permite reutilizar código y crear jerarquías de clases.

// La clase que hereda se llama clase hija o subclase, y la clase de la que se hereda se llama clase padre o superclase.

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

// usa extends para heredar de otra clase
class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name) // llama al constructor de la clase padre
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()

//                                               Métodos estáticos
// los métodos estáticos son aquellos que pertenecen a la clase en sí misma y no a las instancias de la clase. Se definen utilizando la palabra clave static. Los métodos estáticos se utilizan para funciones que no necesitan acceder a las propiedades de una instancia específica.
// Osea que no usan this. y se llaman desde la clase y no desde el objeto.
// Por convención, los métodos estáticos suelen ser funciones que realizan operaciones relacionadas con la clase, pero que no dependen de los datos de una instancia específica.
// Por ejemplo, una clase Math podría tener un método estático para sumar dos números.
class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))