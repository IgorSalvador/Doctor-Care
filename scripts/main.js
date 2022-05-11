function onScroll(){
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll(){
  //Variaveis utilizadas
  let nav = document.getElementById('navigation')

  //Quando o eixo Y da tela for maior que zero, é adicionada a classe
  if(scrollY > 0){
    nav.classList.add('scroll')
  }
  else{
    nav.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  //Variaveis utilizadas
  let backToTop = document.getElementById('backToTopButton')

  //Quando o eixo Y da tela for maior que zero, é adicionada a classe
  if(scrollY > 500){
    backToTop.classList.add('show')
  }
  else{
    backToTop.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration:  700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);
