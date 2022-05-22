window.addEventListener('scroll', onScroll)

function onScroll(){
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(){
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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
  if(scrollY > 350){
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
