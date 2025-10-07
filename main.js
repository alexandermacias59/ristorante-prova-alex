document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navBoxes = document.querySelectorAll('.nav-box');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navBoxes.forEach(box => {
                box.classList.toggle('show');
            });

            // (Opzionale) Cambia stato dell’hamburger
            hamburger.classList.toggle('open');
        });
    } else {
        console.warn("Hamburger button not found");
    }
});
