//Uso estricto de javaScript
//SINTAXIS: "use strict"
//Con esto no se pueden usar variables no declaradas
//Fuera de una función sería obligado para todo el programa y dentro de una función sólo afecta a la función


//"use strict";
//Si no declaramos antes las variables da error
let nombre;
let edad;

function informacion(){
    nombre = "Persona";
    edad = 2023-1963;
    console.log(nombre + " de " + edad + " años.");
}

informacion();

// No le afecta el strict de la función
nombre2 = "nombre 2";

function informa2(){
    //usamos el strict dentro de la función
    "use strict";
    let persona = "Nombre";
    //Si ni se pove let o var daría error
    let nacimiento = "2020";
    console.log(persona + " de " + nacimiento);

}

informa2();