/*

var comediantes = ["Irving", "Fercho", "Dzereco", "Nohoch"];
function saludarComediantes(comediante){
console.log (`hola, ${comediante}`);
}
for (var i=0; i < comediantes.length; i++){
    saludarComediantes(comediantes[i]);
}

*/

var estudiantes = ["Hugo", "Paco", "Luis", "Donald"];
function saludarEstudiantes(estudiante) {
  console.log(`hola, ${estudiante}`);
}
for (var estudiante of estudiantes) saludarEstudiantes(estudiante);






var comediantes = ["Irving", "Fercho", "Dzereco", "Nohoch"];
function saludarComediantes() {
  for (comediante of comediantes) {
    console.log(`hola, ${comediante}`);





    
  }
}
//fizz buzz
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("buzz");
  } else {
    console.log("fizz");
  }
}
