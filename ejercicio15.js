/*Escribir un programa que escriba en pantalla los divisores de un número dado*/

    function getDivisors(number){
        let divisors=[]
        for(i=1;i<=number;i++){
            if (number%i===0) divisors.push(i)

        }
        return divisors
    }
    