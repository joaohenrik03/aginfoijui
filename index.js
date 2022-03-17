/* Abrir e fechar menu ao clicar: hamburguer && X */ 

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Fechar menu ao clicar em algum link */ 

const linksMenu = document.querySelectorAll('nav ul li a')

for (const links of linksMenu) {
    links.addEventListener('click', function() {
        nav.classList.remove('show')   
    })
}

/* Colocar sombra ao header quando der scroll */ 

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')       
    } else {
        header.classList.remove('scroll')       
    }
})

/* Testimonial carousel */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true
      }
    }
})