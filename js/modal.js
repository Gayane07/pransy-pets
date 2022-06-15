let menu = document.querySelector('.mob-menu'); 
let modal = document.querySelector('.modal'); 
let closeModal = document.querySelector('.close'); 

function openMenu(){
    menu.addEventListener('click', function(){
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
}
openMenu()

function closeMenu(){
    closeModal.addEventListener('click', function(){
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    })
}
closeMenu()