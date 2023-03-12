//Ámbito de las variables

/*
Zona del programa donde la variable puede trabajar
global y local
Con let se diferencia el ámbito de bloque
*/ 

function ambito(){
    "user strict"; //Obligamos que se declaren las variables antes de ser usadas
    let a = "Ámbito de la función";
    if (true){
        let a = "Ámbito de bloque";
        console.log("El ámbito de bloque a es: " + a);
    }

    console.log("El ámbito de función a es: " + a);
}
ambito();

function ambito2(){
    "user strict"; //Obligamos que se declaren las variables antes de ser usadas
    //let a = "Ámbito de la función";
    if (true){
        var a = "Ámbito de bloque";
        console.log("El ámbito de bloque a con var es: " + a);
    }

    console.log("El ámbito de función con var a es: " + a);
}

ambito2();
