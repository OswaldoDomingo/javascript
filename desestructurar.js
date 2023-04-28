/*
La desestructuración es una característica de JavaScript que permite extraer valores 
de matrices u objetos y asignarlos a variables de forma concisa. 
Es una sintaxis abreviada que facilita el trabajo con estructuras de datos complejas.
*/

const myArray = ["Oswaldo", "Domingo", "Valencia", 59];
const [nombre,apellido,ciudad,edad] = myArray;

console.log(nombre);
console.log(apellido);
console.log(ciudad);
console.log(edad);
/*
Oswaldo
Domingo
Valencia
59
*/

//asignar valores a algunas variables e ignorar otras
const[nom,,city,] = myArray;
console.log(nom);
console.log(city);
/*
    Oswaldo
    Valencia
*/


//Con objetos
const myObjeto = {
    nombr: 'Oswaldo',
    apellid: 'Domingo',
    eda: 59
};

const{nombr, apellid, eda} = myObjeto;
console.log(nombr);
console.log(apellid);
console.log(eda);

//También puede utilizar la desestructuración 
//para asignar valores a variables con nombres diferentes 
//a los de las propiedades del objeto

const{nombr:dato1,apellid:dato2,eda:dato3} = myObjeto;
console.log(dato1);
console.log(dato2);
console.log(dato3);

