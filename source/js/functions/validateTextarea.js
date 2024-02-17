function validateTextarea () {
  const textarea = document.querySelector('.contacts__form-textarea');
  const result = document.querySelector('.contacts__textarea-result');

  const limit = 255;

  if(result) {
    result.textContent = 0 + "/" + limit;
  }

  if(textarea) {
    textarea.addEventListener('input', ()=> {
      const textLength = textarea.value.length;
      result.textContent = textLength + "/" + limit;

      if(textLength > limit) {
        result.style.color = "#E74C3C";
      } else {
        result.style.color = "var(--color-gray)";
      }
    })
  }
}

validateTextarea();
