(function(){
    const list = document.querySelector('.menuLinks');
    const menu = document.querySelector('.menuImg');
    menu.addEventListener('click', ()=> list.classList.toggle('menuLinks--show'));
})();