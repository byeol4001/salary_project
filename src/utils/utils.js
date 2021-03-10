// import $ from 'jQuery';

export function moveTo(goto) {
  document.getElementById(goto).scrollIntoView({ behavior: 'smooth' });
}

/* export function moveToSmooth(goto) {
  const section = document.querySelector('#' + goto);
  const top = section.getBoundingClientRect().top;
  $('html, body').animate(
    {
      scrollTop: top,
    },
    1000
  );
} */
