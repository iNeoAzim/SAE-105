document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const sliderNav = document.querySelector('.slider-nav');

    
    slides.forEach((slide, index) => {
        const dot = document.createElement('a');
        dot.href = `#slide${index + 1}`;
        dot.classList.add('dot');
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            slider.scrollTo({
                left: slide.clientWidth * index,
                behavior: 'smooth'
            });
        });
        sliderNav.appendChild(dot);
    });


    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.scrollTo({
            left: slides[0].clientWidth * currentIndex,
            behavior: 'smooth'
        });
    }, 3000); 
});
