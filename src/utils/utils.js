export function moveTo(goto) {
  document.getElementById(goto).scrollIntoView({ behavior: 'smooth' });
}

export function moveToSmooth(goto) {
  const section = document.querySelector('#' + goto);
  const top = section.getBoundingClientRect().top;
  window.scrollTo(0, top);
}
