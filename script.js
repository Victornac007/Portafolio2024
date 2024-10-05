



window.addEventListener('scroll', () => {
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (window.scrollY > 100) {
        whatsappButton.style.opacity = '1';
    } else {
        whatsappButton.style.opacity = '0';
    }
});