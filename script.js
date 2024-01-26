const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideIndex = 0;

//slider next button

nextBtn.addEventListener('click',() => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
})
    
    slideIndex++;

    if (slideIndex > (numberOfSlides - 1)) {
        slideIndex = 0;
}
    slides[slideIndex].classList.add('active');
} 
)


//slider previous button

prevBtn.addEventListener('click',() => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
})
    
    slideIndex--; 

    if (slideIndex < 0) {
        slideIndex = numberOfSlides - 1;
}
    slides[slideIndex].classList.add('active');
} 
)