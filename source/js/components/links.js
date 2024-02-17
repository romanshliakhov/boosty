const links = [...document.querySelectorAll('.tags__btn')];
const linkMore = document.querySelector('.tags__more');

if(links) {
  links.forEach(function(link, i){
    if(i > 4) {
      link.classList.add('hide');

      linkMore.addEventListener('click', () => {
        link.classList.remove('hide');
        linkMore.style.opacity="0";
        linkMore.style.visibility="hidden";
      })
    } if (links.length <= 6) {
      linkMore.remove();
    }
  })
}


