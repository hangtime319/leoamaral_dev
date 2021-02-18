// SCROLL SUAVE PARA LINK INTERNO 

const InsideLinks = document.querySelectorAll('.js-menu a[href^="#"]');

function initSmoothScroll(){
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  InsideLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initSmoothScroll();

const contato = document.querySelectorAll('section');
contato.forEach((item) => {
  item.classList;
  console.log(item);
});