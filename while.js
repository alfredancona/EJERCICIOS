var estudiantes=["Hugo", "Paco", "Luis", "Donald"]
function saludarEstudiantes(estudiante){
    console.log(`hola${estudiante}`);
}

while(estudiantes.length>0){
    var estudiante=estudiantes.shift();
    saludarEstudiantes(estudiante);

}