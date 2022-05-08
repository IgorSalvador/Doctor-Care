function onScroll(){
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

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}