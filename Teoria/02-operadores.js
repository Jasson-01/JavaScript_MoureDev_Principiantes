//                                    OPERADORES

// Operadores Aritméticos
let a = 10;
let b = 3;

console.log("Suma:", a + b); // Suma
console.log("Resta:", a - b); // Resta
console.log("Multiplicación:", a * b); // Multiplicación
console.log("División:", a / b); // División
console.log("Módulo:", a % b); // Módulo
console.log("Exponenciación:", a ** b); // Exponenciación

// Incremento y Decremento
a++;
console.log("Incremento:", a); // Incremento
b--;    
console.log("Decremento:", b); // Decremento

// Operadores de Asignación
let c = 5;
c += 2; // c = c + 2
console.log("Asignación (+=):", c);
c *= 3; // c = c * 3
console.log("Asignación (*=):", c);
c -= 4; // c = c - 4
console.log("Asignación (-=):", c);
c /= 2; // c = c / 2
console.log("Asignación (/=):", c);
c %= 3; // c = c % 3
console.log("Asignación (%=):", c);
c **= 2; // c = c ** 2
console.log("Asignación (**=):", c);
c = 5; // Reiniciamos c a 5
console.log("Reinicio de c:", c);


// Operadores de Comparación
let x = 7;
let y = "7";
console.log("Igualdad (==):", x == y); // Igualdad por valor
console.log("Desigualdad (!=):", x != y); // Desigualdad
console.log("Estrictamente igual (===):", x === y); // Igualdad por identidad (valor y tipo)
console.log("Estrictamente desigual (!==):", x !== y); // Estrictamente desigual
console.log("Mayor que (>):", x > 5); // Mayor que
console.log("Menor que (<):", x < 10); // Menor que
console.log("Mayor o igual que (>=):", x >= 7); // Mayor o igual que
console.log("Menor o igual que (<=):", x <= 8); // Menor o igual que
console.log("Comparación entre variables (x > y):", x > y); // Comparación entre variables
console.log(undefined == null); // Comparación entre undefined y null // true
console.log(undefined === null); // Comparación estricta entre undefined y null // false

// valores Truthy (valores verdaderos):
// Todos los numeros positivos y negativos, excepto 0
// Todas las cadenas de texto no vacías
// Todos los objetos, incluyendo arrays y funciones
// todos los boolean 

// valores Falsy (valores falsos):
// 0
// 0n (como big int)
// null
// undefined
// NaN (Not a Number)
// el booleano false
// Cadenas de texto vacías ("", '', ``)

// Operadores Lógicos
let isTrue = true;
let isFalse = false;
console.log("AND (&&):", isTrue && isFalse); // AND lógico
console.log("OR (||):", isTrue || isFalse); // OR lógico
console.log("NOT (!):", !isTrue); // NOT lógico


// Operadores ternarios
let age2 = 25;
let canVote = (age2 >= 18) ? "Puede votar!" : "No puede votar!";
console.log("Operador ternario:", canVote); // Operador ternario


