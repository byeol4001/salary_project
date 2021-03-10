import $ from 'jquery';

export function moveTo(goto) {
  document.getElementById(goto).scrollIntoView({ behavior: 'smooth' });
}

export function moveToSmooth(goto) {
  const section = document.querySelector(`#${goto}`);
  const top = section.getBoundingClientRect().top + window.scrollY;
  $('html, body').animate(
    {
      scrollTop: top,
    },
    1000
  );
}
