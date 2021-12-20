const closebt = document.querySelector('.close');
const hamb = document.querySelector('.hamb');
const menu = document.querySelector('.mobile_menu');

closebt.addEventListener('click', ()=>{
menu.style.display='none';
});
hamb.addEventListener('click', ()=>{
    
    menu.style.display='flex';
    });
