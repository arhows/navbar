const toogleEl = document.querySelector('.menu');
const toogleIcon = document.querySelector('.menu i');
const navLinksEl = document.querySelector('.nav-links');

toogleEl.addEventListener('click', (e) => {
  if (toogleIcon.classList.contains('fa-bars')) {
    toogleIcon.classList.remove('fa-bars');
    toogleIcon.classList.add('fa-times');
    navLinksEl.classList.add('active');
  } else {
    toogleIcon.classList.remove('fa-times');
    toogleIcon.classList.add('fa-bars');
    navLinksEl.classList.remove('active');
  }
});
