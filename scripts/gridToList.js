const list = document.querySelector('.listt');
const grid = document.getElementById('gridd');
const ltg = document.querySelector('.ltg');
const ltgEvents = document.querySelector('.ltgEvents');

list.addEventListener('click', () =>{
    ltg.classList.add('list')
});
grid.addEventListener('click', () =>{
    ltg.classList.remove('list')
});
list.addEventListener('click', () =>{
    ltgEvents.classList.add('list')
});
grid.addEventListener('click', () =>{
    ltgEvents.classList.remove('list')
});

