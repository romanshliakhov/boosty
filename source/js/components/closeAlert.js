const alertMessage = document.querySelector('.shop__alert');
const alertMessageClose = document.querySelector('.shop__alert-close');

if(alertMessageClose) {
  const closeAlertMessage = function () {
    alertMessageClose.addEventListener('click', () => {
      alertMessage.classList.add('active');
    })
  }

  closeAlertMessage();
}



