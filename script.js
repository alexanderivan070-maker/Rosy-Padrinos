document.addEventListener('DOMContentLoaded', () => {
    // Contador Regresivo al 19/09/2026 a las 20:00:00
    const fechaEvento = new Date('2026-09-19T20:00:00').getTime();

    const actualizarContador = setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = fechaEvento - ahora;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = dias;
        document.getElementById('hours').innerText = horas;
        document.getElementById('minutes').innerText = minutos;
        document.getElementById('seconds').innerText = segundos;

        if (diferencia < 0) {
            clearInterval(actualizarContador);
            document.getElementById('countdown').innerText = "¡La fiesta ha comenzado!";
        }
    }, 1000);
});

// Función para confirmar asistencia vía WhatsApp
function confirmarAsistencia() {
    const numeroWhatsApp = "59168633503"; 
    const mensaje = "¡Hola! Confirmo mi asistencia a la Fiesta de Ex-Promociones de la U.E. Lotte Salzgeber.";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
}