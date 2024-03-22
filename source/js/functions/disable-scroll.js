const htmlEl = document.documentElement;
const bodyEl = document.body;

export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${(window.innerWidth - bodyEl.offsetWidth)}px`;
  const topOffset = pagePosition !== 0 ? `-${pagePosition}px` : null; // Устанавливаем top только если pagePosition не равен 0


  htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
  bodyEl.style.paddingRight = paddingOffset;
  bodyEl.classList.add('dis-scroll');
  bodyEl.dataset.position = pagePosition;
  if (topOffset !== null) {
    bodyEl.style.top = topOffset;
  }
}
