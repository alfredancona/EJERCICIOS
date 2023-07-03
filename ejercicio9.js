/** Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a */

/*var frase = "Alfredo Antonio Ancona Osalde".toLowerCase();
var contador = 0;
for (var i = 0; i < frase.length; i++) {
  if (frase.charAt(i) === "a") {
    contador++;
  }
}

console.log(contador);*/

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
