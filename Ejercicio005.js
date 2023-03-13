/*
Se pueden declarar arrays constantes con const
No se pueden redifinir pero sí se puede cambiar sus valores uno a uno
*/

function cambiarArray(){
    "user strict";

    const MIARRAY = [1, 2 ,3]; 
    console.log(MIARRAY);

    //ESto dará error
    //MIARRAY = [4,5,6];

    MIARRAY[0]= 4;
    MIARRAY[1]= 5;
    MIARRAY[2]= 6;
    console.log(MIARRAY);

}

cambiarArray();