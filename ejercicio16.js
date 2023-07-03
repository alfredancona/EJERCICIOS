/*Escribir un programa que escriba en pantalla los divisores comunes de dos números dados */

function getDivisors(number1,number2){
    let divisors=[]
    for(i=1;i<=number1 && i<=number2;i++){
        if (number1%i===0 && number2%i===0 ) divisors.push(i)

    }
    return divisors
}
