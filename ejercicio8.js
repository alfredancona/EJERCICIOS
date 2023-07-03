/*Escribe un programa que pida un número y diga si es divisible por 2*/ 

/* opcion 1 */ 


function divisibleEntre2(valor){
    if (valor%2===0) {
        return(true)
    }
    else {
        return(false)
    }
}

console.log (divisibleEntre2(10));

/* opcion 2 */ 

function divisibleEntre2(valor){
    return valor%2===0
}






