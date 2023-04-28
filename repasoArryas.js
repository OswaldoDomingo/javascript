
//Ejemplo de array
const myArray = ["String", 12, 2.3, true];

//Acceder a un elemento del array
console.log(myArray[2]);
//2.3

//Modificar elementos del array
myArray[0]="Cadena";
console.log(myArray)
//[ 'Cadena', 12, 2.3, true ]

//Contar los elementos del array
let numeroElementos = myArray.length;
console.log("Tiene",numeroElementos, "elementos");
//Tiene 4 elementos

//Recorrer el array
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
/**
    Cadena
    12
    2.3
    true
 */

//Arrays anidados
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];
  console.log(subarray)
  //[ [ 10, 11, 12 ], 13, 14 ]
  console.log(nestedSubarray)
  //[ 10, 11, 12 ]
  console.log(element)
  //11

  //Manipular arreglos con el método push o eliminar el último elemento
  const arrayPush=[[1,2,3], [4,5,6]];
  arrayPush.push([7,8,9]);
  console.log(arrayPush);
  //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

  //manipular dentro de un array
  arrayPush[0].push(["a", "b", "c"]);
  console.log(arrayPush);
  //[ [ 1, 2, 3, [ 'a', 'b', 'c' ] ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

  //Manipular arreglos con el método pop
  const myArrayPop = [["Oswaldo", 23], ["Pancho", 2]];

    //Guardamos en myArrayPop2 la última 
    const myArrayPop2 = myArrayPop.pop();
    console.log(myArrayPop2);
    //[ 'Pancho', 2 ]
    console.log(myArrayPop);
    //[ [ 'Oswaldo', 23 ] ]

  //Manipular arreglos con el método shift o eliminar el primer elemento
  const myArrayShift = [["Oswaldo", 23], ["Pancho", 2]];
  console.log(myArrayShift);
  //[ [ 'Oswaldo', 23 ], [ 'Pancho', 2 ] ]
  const myArrayShift2 = myArrayShift.shift();
  console.log(myArrayShift);
  //[ [ 'Pancho', 2 ] ]
  console.log(myArrayShift2);
  //[ 'Oswaldo', 23 ]

  //Manipular arreglos con el método unshift() 
  //unshift() añade el elemento al principio del arreglo.
  const myArrayUnshift = [["Oswaldo", 23], ["Pancho", 2]];
  //Eliminamos el primer elemento con shift
  myArrayUnshift.shift()
  console.log(myArrayUnshift)
  //[ [ 'Pancho', 2 ] ]
  //Añado en el primer lugar 
  myArrayUnshift.unshift(["Irene", 16]);
  console.log(myArrayUnshift);
  //[ [ 'Irene', 16 ], [ 'Pancho', 2 ] ]

  