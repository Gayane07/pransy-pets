let images = document.querySelectorAll('.products div img')
let mainImage = document.querySelector('.main-product img')
let parent = document.querySelector('.products')
let a = false

function selectImage(){
    parent.addEventListener('click',function(e){
        for(let item of images){
            item.classList.remove('active')
            mainImage.src = e.target.src 
        }
        e.target.classList.add('active')
    })
}
selectImage()