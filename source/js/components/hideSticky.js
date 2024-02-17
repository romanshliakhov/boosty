const stickyEl = document.querySelector('.sticky__links');

document.addEventListener('DOMContentLoaded', function(e) {
  document.addEventListener('scroll', function(e) {
      let documentHeight = document.body.scrollHeight;

      let currentScroll = window.scrollY + window.innerHeight;
      let modifier = 200;

      if(currentScroll + modifier > documentHeight) {
        stickyEl.classList.add('hide');
      } else {
        stickyEl.classList.remove('hide');
      }
  })
})
