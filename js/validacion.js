document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const terminos = document.getElementById("terminos");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let valid = true;

        if (nombre.value.trim() === "") {
            document.getElementById("nombre-error").textContent = "Debe ingresar un nombre";
            nombre.classList.add("is-invalid");
            valid = false;
        } else {
            document.getElementById("nombre-error").textContent = "";
            nombre.classList.remove("is-invalid");
        }

        if (apellido.value.trim() === "") {
            document.getElementById("apellido-error").textContent = "Debe ingresar un apellido";
            apellido.classList.add("is-invalid");
            valid = false;
        } else {
            document.getElementById("apellido-error").textContent = "";
            apellido.classList.remove("is-invalid");
        }

        if (email.value.trim() === "" || !isValidEmail(email.value)) {
            document.getElementById("email-error").textContent = "Debe ingresar un email";
            email.classList.add("is-invalid");
            valid = false;
        } else {
            document.getElementById("email-error").textContent = "";
            email.classList.remove("is-invalid");
        }

        if (password1.value.length < 6) {
            document.getElementById("password1-error").textContent = "Debe ingresar una contraseña con al menos 6 caracteres.";
            password1.classList.add("is-invalid");
            valid = false;
        } else {
            document.getElementById("password1-error").textContent = "";
            password1.classList.remove("is-invalid");
        }

        if (password1.value !== password2.value) {
            document.getElementById("password2-error").textContent = "Debe ser igual a contraseña";
            password2.classList.add("is-invalid");
            valid = false;
        } else {
            document.getElementById("password2-error").textContent = "";
            password2.classList.remove("is-invalid");
        }

        if (!terminos.checked) {
            document.getElementById("terminos-error").textContent = "Debes aceptar los términos y condiciones.";
            valid = false;
        } else {
            document.getElementById("terminos-error").textContent = "";
        }

        if (valid) {
            form.submit();
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    nombre.addEventListener("input", function () {
        if (nombre.value.trim() !== "") {
            document.getElementById("nombre-error").textContent = "";
            nombre.classList.remove("is-invalid");
        }
    });

    apellido.addEventListener("input", function () {
        if (apellido.value.trim() !== "") {
            document.getElementById("apellido-error").textContent = "";
            apellido.classList.remove("is-invalid");
        }
    });

    email.addEventListener("input", function () {
        if (isValidEmail(email.value)) {
            document.getElementById("email-error").textContent = "";
            email.classList.remove("is-invalid");
        }
    });

    password1.addEventListener("input", function () {
        if (password1.value.length >= 6) {
            document.getElementById("password1-error").textContent = "";
            password1.classList.remove("is-invalid");
        }
    });

    password2.addEventListener("input", function () {
        if (password2.value === password1.value) {
            document.getElementById("password2-error").textContent = "";
            password2.classList.remove("is-invalid");
        }
    });

    terminos.addEventListener("change", function () {
        if (terminos.checked) {
            document.getElementById("terminos-error").textContent = "";
        } else {
            document.getElementById("terminos-error").textContent = "Debes aceptar los términos y condiciones.";
        }
    });
});
