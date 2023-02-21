const btnMenuMobile = document.querySelector('.btn-mobile-menu');
const menuMobile = document.querySelector('.menuMobile');

btnMenuMobile.addEventListener('click', toggleMobilemenu) ;

function toggleMobilemenu() {
    menuMobile.classList.toggle ('inactive');
}


