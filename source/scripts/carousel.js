const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slide = document.querySelector('.carousel-container .carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth; //armazenando o primeiro elemento da lista de imagens

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    slide.style.transform = `translateX(${-size * counter}px)`;
});

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    slide.style.transform = `transformX(${-size * counter}px)`;
});