let scanf = require('scanf');

let opcion = 1;

while(opcion == 1){
  
    console.log("Digita la nota del examen");
    let nota = scanf('%d');

    while (isNaN(nota)){

        console.log("Ingrese un valor numérico entre 0 y 10");
        console.log("Digita la nota del examen");
        nota = scanf('%d');
    };
    if (nota >= 0 & nota <= 3)
        console.log("Su calificación es Muy Deficiente");
    else{
        if (nota > 3 & nota <= 5)
            console.log("Su calificación es Insuficiente");
    }
    if(nota > 5 & nota <= 6)
        console.log("Su calificación es Suficiente");
    else{
        if(nota > 6 & nota <= 7)
        console.log("Su calificación es Buena(Bien)");
    }
    if (nota > 7 & nota <= 9)
        console.log("Su calificación es Notable");
    else{
        if (nota > 9 & nota <= 10)
            console.log("Su calificación es Sobresaliente");
    }
    console.log("Presione 1  para continuar o 0 para salir");
    opcion = scanf('%d');
}

