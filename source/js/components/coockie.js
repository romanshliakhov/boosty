const sidePanel = document.querySelector('.coockie');
const sidePanelClose = document.querySelector('.coockie__btn');

(function closePanel() {
  sidePanelClose.addEventListener('click', () => {
    sidePanel.classList.add('hide');
    sidePanel.style.marginTop = `-${sidePanel.offsetHeight}px`;
  })
})();





