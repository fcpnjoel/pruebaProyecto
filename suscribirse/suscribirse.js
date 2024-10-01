

var regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var pass = document.getElementById("passw").value 
function listo() {
    if ((document.getElementById("nu")).value == "") {
        alert("El nombre de usuario debe completarse")
    }
    else if ((document.getElementById("nombre")).value == "") {
        alert("El nombre debe completarse")
    }
    else if (document.getElementById("appel").value == "") {
        alert("El apellido debe completarse")
    }
    else if (document.getElementById("num").value == "") {
        alert("El numero de telefono debe completarse")
    }
    else if (document.getElementById("passw").value == "") {
        alert("La contraseña debe completarse")
    }
    else if (!regex.test(document.getElementById("passw").value)) {
        alert("La contraseña no cumple con los requisitos.")
    }
    else if (document.getElementById("conf").value == "") {
        alert("Confirme contraseña")
    }
    else if (document.getElementById("passw").value != document.getElementById("conf").value) {
        alert("Las contraseñas no coinciden")
    }
    else {
        alert("todo correcto")
        location.reload()
    }
}