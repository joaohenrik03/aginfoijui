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