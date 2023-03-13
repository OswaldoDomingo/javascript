/*
Las variables const tienen ámbito de bloque
Su valor no puede variar
Para diferenciarla se escriben en mayúsculas
*/

function saludar(){
    "user strict";

    let saludo = "Hola, como estas";
    saludo = "Adeu amiç meu";
    console.log(saludo);

    //Este nos dará error
    const SALUDO2="Hola constante";
    SALUDO2 = "Nuevo saludo";
    console.log(SALUDO2);
}

saludar();