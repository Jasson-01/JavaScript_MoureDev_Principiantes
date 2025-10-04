//                                                CLASES
// Una clase es una plantilla para crear objetos con propiedades y métodos predefinidos.

class Person {
    
    // Los contructores son métodos especiales para inicializar objetos creados a partir de una clase.
    constructor(name, age, alias){
        this.name = name; //this.name es la propiedad del objeto, name es el parámetro del constructor
        this.age = age;
        this.alias = alias;
    }
    //El parámetro y la propiedad pueden tener el mismo nombre, pero se distinguen porque el parámetro es local al constructor y la propiedad se accede con this.this dentro del constructor siempre apunta al objeto que se está creando.
}

//sintaxis para crear un objeto a partir de una clase

// const person1 = new Person("Brais", 37, "MoureDev");
// console.log(person1);
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.alias);
// console.log(typeof person1);

// Valores por defecto en el constructor
// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Brais", 37)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "MoureDev"

console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Brais", 37, "MoureDev")
person4.walk()

// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")

// No podemos acceder
// console.log(person5.bank) 
// person5.bank = "new IBAN123456789" // bank no es #bank

console.log(person5)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

let person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"
