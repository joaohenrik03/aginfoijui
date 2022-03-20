/* Abrir e fechar menu ao clicar: hamburguer && X */ 
/* Open and close menu on click: hamburger && X */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Fechar menu ao clicar em algum link */ 
/* Close menu when clicking on a link */

const linksMenu = document.querySelectorAll('nav ul li a')

for (const links of linksMenu) {
    links.addEventListener('click', function() {
        nav.classList.remove('show')   
    })
}

/* Colocar sombra ao header quando der scroll */ 
/* Put a shadow on the header when scrolling */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')       
    } else {
        header.classList.remove('scroll')       
    }
})

/* Adicionar botão de voltar ao topo quando passar da seção home */
/* Add back to top button when past home section */

const buttonBackToTop = document.querySelector('.back-to-top')
const home = document.querySelector('#home')
const homeHeight = home.offsetHeight

window.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight) {
        buttonBackToTop.classList.add('back-to-top-show')  
    } else if (window.scrollY < homeHeight) {
        buttonBackToTop.classList.remove('back-to-top-show')      
    }
})

/* Carrossel de depoimentos */
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

/* ScrollReveal */
/* ScrollReveal */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true

}) 

scrollReveal.reveal(`
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links`, 
    { interval: 100 }
)