/** Escribe un programa que pida una frase y escriba las vocales que aparecen */


/**
 var str = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches = str.match(regexp);

console.log(matches);



function contadordeCaracteres(frase,letra) {
    frase.toLowerCase();
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
      if (frase.charAt(i) === letra) {
        contador++;
      }
    }
  
    return contador
  }

var str = 'Mi mama me mima';
var regexp = /[A,E,I,O,U]/gi;
var matches = str.match(regexp);

console.log(matches);
*/ 

//ejercicio 10
function vocales(frase) {
var regexp = /[A,E,I,O,U]/gi;
var matches = frase.match(regexp);

return matches
}
    function getVowels(frase, regexp) {
    var matches = frase.match(regexp);
    return resultados={vocales:matches, longitud:matches.length}
    }
//ejercicio 9

getVowels("HOLA MUNDO",/[A]/gi).longitud
