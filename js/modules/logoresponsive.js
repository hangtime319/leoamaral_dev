// a função tem que ocorrer antes da página carregar

export default function initLogoResponsive () {
  const logo = document.getElementById('logo-responsivo');
  function changeLogo(){
    if (window.innerWidth < 768){
      logo.setAttribute('src', 'img/logo-responsivo.png');
    }
  }
  window.onload;
  window.addEventListener('resize', changeLogo);
}




