const passwordParent = document.querySelectorAll('[data-password-parent]');

function showPassword (parent) {
  parent.forEach(function (item) {
    const passwordInput = item.querySelector('input[name="password"]');
    const passwordBtn = item.querySelector('input[type="checkbox"]');

    passwordBtn.addEventListener('click', function(e){
      this.checked ?
      passwordInput.setAttribute('type', 'text') :
      passwordInput.setAttribute('type', 'password');
    })
  })
}

if(passwordParent) {
  showPassword(passwordParent);
};





