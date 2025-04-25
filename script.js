const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


function sendToWhatsApp(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtener los valores de todos los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Verificar que el campo de mensaje no esté vacío
    if (message.trim() === "") {
        alert("Please enter a message before sending.");
        return;
    }

    // Crear el mensaje que será enviado
    const fullMessage = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Subject: ${subject}
    Message: ${message}`;

    // Codificar el mensaje
    const encodedMessage = encodeURIComponent(fullMessage);
    const phoneNumber = "573154431441"; // Código de país + número (sin espacios ni símbolos)
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abrir WhatsApp con el mensaje
    window.open(url, '_blank');
}