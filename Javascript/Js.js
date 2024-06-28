//Ejercicio 1

console.log("Hola, este es un mensaje en la consola.");


//Ejercicio 2

let numero ;
numero= 5;
console.log(numero);



//Ejercicio 3 
let mensaje = "Hola, mundo!";
console.log(mensaje);



//Ejercicio 4

let saludo = "Que tal estas";
let nombre = "Alejandro";

let mensajeCompleto = saludo + ", " + nombre + "!";
console.log(mensajeCompleto);




//Ejercicio 5

let esVerdadero = true;
console.log(esVerdadero);



//Ejercicio 6
let valor = prompt("ingresa un valor:");
console.log("El valor ingresado es: " + valor);




//Ejercicio 7

let numero1 = 4;

if (numero1 > 5) {
    console.log("El número es mayor que 5");
} else {
    console.log("El número no es mayor que 5");
}




//Ejercicio 8

let frutas = ["Manzana", "Banana", "Cereza", "Durazno"];
console.log(frutas[2]); 

//Ejercicio 9

let frutas1 = ["Manzana", "Banana", "Cereza", "Durazno"];

for (let i = 0; i < frutas1.length; i++) {
    console.log(frutas1[i]);
}



//Ejercicio 10

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}


//Ejercicio 11

function sumarNumeros(num1, num2) {
    let suma = num1 + num2;
    return suma;
}

let resultado = sumarNumeros(5, 3);
console.log("El resultado de la suma es:", resultado);


//Ejercicio 12

function operacion(callback) {
    console.log("Realizando una operación...");
   
    setTimeout(function() {
        callback();
    }, 2000);
}

function despuesDeLaOperacion() {
    console.log("Operación completada.");
}

operacion(despuesDeLaOperacion);


//Ejercicio 13

class Persona {
    
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}


let persona1 = new Persona("Juan", 27);
persona1.saludar();