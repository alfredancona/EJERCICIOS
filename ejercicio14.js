/*Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible) */


function numeroDivisible(numero){
    if (numero%2===0)console.log("divisible entre 2")
    if (numero%3===0) console.log("divisible entre 3")
    if (numero%5===0)console.log("divisible entre 5")
    if (numero%7===0)console.log("divisible entre 7")

    }


    function numeroDivisible(numero){
        let divisores=[]
        if (numero%2===0) divisores.push(2)
        if (numero%3===0) divisores.push (3)
        if (numero%5===0) divisores.push(5)
        if (numero%7===0) divisores.push(7)
        return divisores}
    