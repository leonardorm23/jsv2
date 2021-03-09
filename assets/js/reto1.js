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
    let edad = prompt("Ingrese su edad");
    let cedula = prompt("Ingrese su documento");
    let telefono = prompt("Ingrese su telefono");

    if (nombre === "" || edad === "" || cedula === "" || telefono === "") {
        alert ("ingrese datos correctos");
        
    } else {
          name.innerHTML = "Nombre: " + nombre;
          age.innerHTML = "Edad: " + edad + " años";
          ced.innerHTML = "Cédula: " + cedula;
          tel.innerHTML = "Telefono: " + telefono;
    }
}

//Onclicks
btnDatos.onclick = function() {
    guardarDatos();
}