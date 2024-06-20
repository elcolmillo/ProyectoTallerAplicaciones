function validar() {
    var retorno_usuario = validar_usuario();
    var retorno_correo = validar_correo();
    var retorno_contraseña = validar_contraseña();
    var retorno_confirmacion = validar_confirmacion();
    var retorno_direccion = validar_direccion();
    var retorno_telefono = validar_telefono();

    return retorno_usuario && retorno_correo && retorno_contraseña && retorno_confirmacion && retorno_direccion && retorno_telefono;
}

// Validar Usuario
function validar_usuario() {
    var input_usuario = document.getElementById("input-usuario");
    var div_error_usuario = document.getElementById("error-usuario");
    var usuario = input_usuario.value;

    if (usuario === "") {
        div_error_usuario.innerHTML = "El Nombre de usuario es obligatorio";
        div_error_usuario.className = "text-danger mt-1";
        return false;
    }
    if (usuario.length < 5 || usuario.length > 15) {
        div_error_usuario.innerHTML = "El Nombre de usuario debe tener entre 5 y 15 caracteres";
        div_error_usuario.className = "text-danger mt-1";
        return false;
    }
    for (var i = 0; i < usuario.length; i++) {
        var char = usuario.charAt(i);
        if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9'))) {
            div_error_usuario.innerHTML = "El Nombre de usuario no puede contener caracteres especiales";
            div_error_usuario.className = "text-danger mt-1";
            return false;
        }
    }
    div_error_usuario.innerHTML = "";
    return true;
}

// Validar contraseña
function validar_contraseña() {
    var input_contraseña = document.getElementById("input-contraseña");
    var div_error_contraseña = document.getElementById("error-contraseña");
    var contraseña = input_contraseña.value;

    if (contraseña === "") {
        div_error_contraseña.innerHTML = "La contraseña es obligatorio";
        div_error_contraseña.className = "text-danger mt-1";
        return false;
    }
    if (contraseña.length < 3 || contraseña.length > 6) {
        div_error_contraseña.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres";
        div_error_contraseña.className = "text-danger mt-1";
        return false;
    }
    var tieneLetra = false;
    var tieneDigito = false;
    for (var i = 0; i < contraseña.length; i++) {
        var char = contraseña.charAt(i);
        if (isNaN(char)) {
            tieneLetra = true;
        } else {
            tieneDigito = true;
        }
    }
    if (!tieneLetra || !tieneDigito) {
        div_error_contraseña.innerHTML = "La contraseña debe tener al menos un dígito y una letra";
        div_error_contraseña.className = "text-danger mt-1";
        return false;
    }
    div_error_contraseña.innerHTML = "";
    return true;
}

// Validar confirmacion
function validar_confirmacion() {
    var input_contraseña = document.getElementById("input-contraseña");
    var input_confirmar_contraseña = document.getElementById("confirmar-contraseña");
    var div_error_confirmacion = document.getElementById("error-confirmacion");

    var contraseña = input_contraseña.value;
    var confirmar_contraseña = input_confirmar_contraseña.value;

    if (contraseña !== confirmar_contraseña) {
        div_error_confirmacion.innerHTML = "Las contraseñas no coinciden";
        div_error_confirmacion.className = "text-danger mt-1";
        return false;
    }
    div_error_confirmacion.innerHTML = "";
    return true;
}

// Validar Direccion
function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;

    if (direccion === "") {
        div_error_direccion.innerHTML = "La direccion es obligatorio";
        div_error_direccion.className = "text-danger mt-1";
        return false;
    }
    div_error_direccion.innerHTML = "";
    return true;
}

// Validar Telefono
function validar_telefono() {
    var input_telefono = document.getElementById("input-telefono");
    var div_error_telefono = document.getElementById("error-telefono");
    var telefono = input_telefono.value;

    if (telefono === "") {
        div_error_telefono.innerHTML = "El número de teléfono es obligatorio";
        div_error_telefono.className = "text-danger mt-1";
        return false;
    }
    if (telefono.substring(0, 4) !== "+569") {
        div_error_telefono.innerHTML = "El número de teléfono debe comenzar con +569";
        div_error_telefono.className = "text-danger mt-1";
        return false;
    }
    if (telefono.length !== 12) {
        div_error_telefono.innerHTML = "El número de teléfono debe tener un total de 9 dígitos después de +569";
        div_error_telefono.className = "text-danger mt-1";
        return false;
    }
    for (var i = 4; i < telefono.length; i++) {
        var char = telefono.charAt(i);
        if (isNaN(char)) {
            div_error_telefono.innerHTML = "El número de teléfono solo puede contener dígitos después de +569";
            div_error_telefono.className = "text-danger mt-1";
            return false;
        }
    }
    div_error_telefono.innerHTML = "";
    return true;
}

// Validar correo
function validar_correo() {
    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("error-email");
    var email = input_email.value;

    if (email === "") {
        div_error_email.innerHTML = "El correo electrónico es obligatorio";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
    if (!email.includes("@")) {
        div_error_email.innerHTML = "El correo electrónico debe contener @";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
    if (!email.includes(".")) {
        div_error_email.innerHTML = "El correo electrónico debe contener un punto (.)";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
    if (!(email.endsWith("@gmail.com") || email.endsWith("@outlook.com"))) {
        div_error_email.innerHTML = "El correo electrónico debe ser @gmail.com o @outlook.com";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
    div_error_email.innerHTML = "";
    return true;
}
