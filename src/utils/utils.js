export function moveTo(goto) {
  document.getElementById(goto).scrollIntoView({ behavior: 'smooth' });
}
