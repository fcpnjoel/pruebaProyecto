function validar() {
    var password = document.getElementById("contra").value;
    if (password === "12345") {
        alert("Inicio de sesion valido")
        location.reload()

    } else {
        alert("E-mail o contraseña incorrectos. Inténtalo nuevamente.");
    }
}