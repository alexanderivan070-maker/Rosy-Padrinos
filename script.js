document.addEventListener('DOMContentLoaded', () => {
    const fechaEvento = new Date('2026-09-19T20:00:00').getTime();

    setInterval(() => {
        const ahora = new Date().getTime();
        const diff = fechaEvento - ahora;
        document.getElementById('days').innerText = Math.floor(diff / (1000*60*60*24));
        document.getElementById('hours').innerText = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        document.getElementById('minutes').innerText = Math.floor((diff % (1000*60*60)) / (1000*60));
        document.getElementById('seconds').innerText = Math.floor((diff % (1000*60)) / 1000);
    }, 1000);

    // Iniciar carrusel
    let index = 0;
    const slides = document.querySelectorAll('.slider img');
    const dots = document.querySelectorAll('.dot');
    setInterval(() => {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }, 3500);
});

function toggleMusic() {
    const m = document.getElementById('background-music');
    if (m.paused) { m.play(); document.getElementById('music-status').innerText = "⏸️ Pausa"; }
    else { m.pause(); document.getElementById('music-status').innerText = "▶️ Play"; }
}

window.addEventListener('click', () => {
    const m = document.getElementById('background-music');
    if (m.paused) { m.play().catch(() => {}); document.getElementById('music-status').innerText = "⏸️ Pausa"; }
}, { once: true });

function confirmarAsistencia() {
    window.open("https://wa.me/59168633503?text=Confirmo%20mi%20asistencia", '_blank');
}