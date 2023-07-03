/* Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad) */

function isPrimeNumber(number){
   return number/number===1 && number/1===number  
   }


function primeNumber(number){
    if (number/number===1 && number/1===number){return "its prime number"}
    else {return "its not a prime number"}
}
