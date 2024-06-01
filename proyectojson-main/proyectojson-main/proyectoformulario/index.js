let datos= {
    nombre:"vrs",
    apellido:"",
    fechaNacimiento: "",
    cedula:"",
    correo:"",
    motivocontacto:"",
    descripcion:"",
}

function registro(){
datos.apellido= document.querySelector(".apellidos").value;
datos.nombre= document.querySelector(".nombre").value;
datos.fechaNacimiento= document.querySelector(".fechaNacimiento").value;
datos.cedula= document.querySelector(".cedula").value;
datos.correo= document.querySelector("#correo").value;
datos.motivocontacto= document.querySelector("#MotivoContacto").value;
datos.descripcion= document.querySelector("#descripcion").value;

console.log(datos)
}


document.getElementById("sub").onclick= function(){
    registro()
}