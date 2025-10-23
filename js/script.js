const images = document.querySelectorAll('.carousel-track img');
let index = 3; // começa com a imagem do meio em foco

function updateCarousel() {
  images.forEach((img, i) => {
    img.className = ''; // limpa as classes antes de reposicionar
    const diff = i - index;

    if (diff === 0) img.classList.add('active');
    else if (diff === -1 || diff === images.length - 1) img.classList.add('left1');
    else if (diff === -2 || diff === images.length - 2) img.classList.add('left2');
    else if (diff === -3 || diff === images.length - 3) img.classList.add('left3');
    else if (diff === 1 || diff === -(images.length - 1)) img.classList.add('right1');
    else if (diff === 2 || diff === -(images.length - 2)) img.classList.add('right2');
    else if (diff === 3 || diff === -(images.length - 3)) img.classList.add('right3');
  });
}

function next() {
  index = (index + 1) % images.length;
  updateCarousel();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
}

// inicializa
updateCarousel();

// controles
document.getElementById('next').addEventListener('click', next);
document.getElementById('prev').addEventListener('click', prev);

// gira automaticamente a cada 3.5s
setInterval(next, 3500);