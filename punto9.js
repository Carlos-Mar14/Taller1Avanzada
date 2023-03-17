//Punto 9 taller
//Tradicional
function asociarEstudiante(nombre, planeta, edad, estatura, seleccionarActividad){
    setTimeout(function(){
        let estudiante={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        seleccionarActividad(estudiante)
    },3000)
}
asociarEstudiante("Juan","Marte",10,1.85, function(estudiante){
    if (estudiante.edadEstudiante<15){
        console.log("Manejo de fuerza")
    } else{
        console.log("Manejo del sable de luz")
    }
})

//Flecha

const asociarEstudiante2 = (nombre, planeta, edad, estatura, seleccionarActividad) => {
    setTimeout(function(){
        let estudiante2={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        seleccionarActividad(estudiante2)
    },3000)
}
asociarEstudiante2("Andres","Jupiter", 20, 2.10, (estudiante2) =>{
    if(estudiante2.edadEstudiante<15){
        console.log("Manejo de la fuerza")
    }else{
        console.log("Manejo sable de luz")
    }
})
