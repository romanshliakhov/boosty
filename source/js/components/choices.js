import Choices from '../vendor/choice.js';

const multiSelect = () => {
  const elements = document.querySelectorAll('.order__choices');

  elements.forEach(el => {
    const choices = new Choices(el, {
      noResultsText: 'Нічого не знайдено',
    })

    // el.closest('.order__choices').querySelector('#choices--default-item-choice-1').style.display = 'none';
  });
}

multiSelect();
