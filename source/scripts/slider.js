// Функция для форматирования числа без десятичных знаков
function formatToFixed(value) {
  return Math.round(value).toFixed(0);
}

// Функция для преобразования строки в число
function parseFromFixed(value) {
  return parseFloat(value);
}

// Инициализация горизонтального слайдера noUiSlider
const slider = document.querySelector('.range-controls__scale');
const minToggle = document.querySelector('.range-controls__toggle--min');
const maxToggle = document.querySelector('.range-controls__toggle--max');

noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  range: {
    'min': 0,
    'max': 1000
  },
  step: 5,
  orientation: 'horizontal',
  format: {
    to: formatToFixed,
    from: parseFromFixed
  },
  pips: {
    mode: 'values',
    values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    density: 10
  }
});

// Синхронизация слайдера с кнопками
slider.noUiSlider.on('update', (values, handle) => {
  const value = values[handle];
  if (handle) {
    maxToggle.textContent = formatToFixed(value);
    document.getElementById('max-price').value = formatToFixed(value);
  } else {
    minToggle.textContent = formatToFixed(value);
    document.getElementById('min-price').value = formatToFixed(value);
  }
});

document.getElementById('min-price').addEventListener('change', function () {
  const minValue = this.value;
  // Установка нового значения для левого бегунка слайдера
  slider.noUiSlider.set([minValue, null]);
});

// Обработчик события изменения для максимального значения цены
document.getElementById('max-price').addEventListener('change', function () {
  const maxValue = this.value;
  // Установка нового значения для правого бегунка слайдера
  slider.noUiSlider.set([null, maxValue]);
});
