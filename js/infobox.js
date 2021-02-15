const toggleanimation = document.querySelector('#imageinfo');
const infobox = document.querySelector('#u303-popper-content--41');
// const anger = document.querySelector('.popover--arrow--top--1kmD8');

infobox.style.display = 'none';
toggleanimation.addEventListener('mouseenter', () => {
  infobox.style.display = 'block';
});

toggleanimation.addEventListener('mouseleave', () => {
  infobox.style.display = 'none';
});

infobox.addEventListener('mouseenter', () => {
  infobox.style.display = 'block';
});

infobox.addEventListener('mouseleave', () => {
  infobox.style.display = 'none';
});


// test123.addEventListener('mousemove', (e) => {
//   toggleanimation.style.left = `${e.pageX + 2}px`;
//   toggleanimation.style.top = `${e.pageY}px`;
// });
