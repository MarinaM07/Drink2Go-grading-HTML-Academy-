const slider = document.querySelector('.special-offers__slider');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
const sliderToggle = document.querySelectorAll('.slider__toggle');

const slides = Array.from(slider.querySelectorAll('.slider__item'));

let currentSlide = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
    sliderToggle[index].classList.remove('slider__toggle--current');
    if (index === currentSlide) {
      sliderToggle[index].classList.add('slider__toggle--current');
    }
  });

  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;
}

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlider();
  }
});

sliderToggle.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

updateSlider();
