let navBar = document.querySelector('#header');

document.addEventListener('scroll', () =>{
    let scrollTop = window.scrollY;

    if(scrollTop > 0){
        navBar.classList.add('rolar');
    } else{
        navBar.classList.remove('rolar');
    }

})
// Navegação acessível para tablets e celulares
const menuToggle = document.querySelector('.menu-toggle');
const menuMobile = document.querySelector('#menu-mobile');
if (menuToggle && menuMobile) {
    function setMenu(open) {
        menuMobile.classList.toggle('aberto', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        menuToggle.querySelector('span').textContent = open ? 'close' : 'menu';
    }
    menuToggle.addEventListener('click', () => setMenu(!menuMobile.classList.contains('aberto')));
    menuMobile.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
    document.addEventListener('click', event => {
        if (!menuMobile.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 1074) setMenu(false); });
}
