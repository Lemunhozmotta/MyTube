document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.querySelectorAll('.carousel-slide'));
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    let currentSlideIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Função para mover o carrossel e atualizar o slide ativo
    const moveToSlide = (track, currentSlide, targetSlideIndex) => {
        track.style.transform = 'translateX(-' + (slideWidth * targetSlideIndex) + 'px)';
        slides[currentSlide].classList.remove('active');
        slides[targetSlideIndex].classList.add('active');
    };

    // Inicializa o primeiro slide como ativo
    slides[currentSlideIndex].classList.add('active');

    // Botão de avanço
    nextBtn.addEventListener('click', () => {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
        } else {
            currentSlideIndex = 0; // Volta para o início
        }
        moveToSlide(track, currentSlideIndex - 1, currentSlideIndex);
    });

    // Botão de retrocesso
    prevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
        } else {
            currentSlideIndex = slides.length - 1; // Volta para o final
        }
        moveToSlide(track, currentSlideIndex + 1, currentSlideIndex);
    });
});