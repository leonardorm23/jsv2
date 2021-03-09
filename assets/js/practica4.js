//Variables
let btnDatos = document.getElementById("btnDatos");
let hNombre = document.getElementById("hNombre");
let name = document.getElementById("name");
let age = document.getElementById("age");
let ced = document.getElementById("ced");
let tel = document.getElementById("tel");

//funciones
const guardarDatos = () => {
    
    let nombre = prompt("Ingrese su nombre");
    console.log(nombre);
    if (nombre === "" && edad ==="") {
        alert("favor escribir su nombre antes de aceptar");
        brake();
    } else {
        name.innerHTML = "Nombre: " + nombre;
    }

    let edad = prompt("Ingrese su edad");
    
    if (edad === "") {
        alert("favor escribir su edad antes de aceptar");
        brake();
    } else {
        age.innerHTML = "Edad: " + edad + " años";
    }
    
    let cedula = prompt("Ingrese su documento");
    
    if (cedula === "") {
        alert("favor escribir su documento antes de aceptar");
        brake();
    } else {
        ced.innerHTML = "Cédula: " + cedula;
    }

    let telefono = prompt("Ingrese su telefono");
    
    if (telefono === "") {
        alert("favor escribir su telefono antes de aceptar");
        brake();
    } else {
        tel.innerHTML = "Telefono: " + telefono;
    }
}


//Onclicks
btnDatos.onclick = function() {
    guardarDatos();
}