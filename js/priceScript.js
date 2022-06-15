let price = 0;
let priceList = document.querySelectorAll('input[name="purcase-options"]'); 
let productPrices = document.querySelectorAll('.product-price'); 
let currentPrice = document.querySelectorAll('.current-price'); 
let background = document.querySelectorAll('.purcase-options tr td'); 
let showBlock = document.querySelectorAll('.save-block'); 

// document is loaded
window.addEventListener('load', function(){
    // set default first value of priceList 
    for(let item of productPrices){
        item.innerHTML = `$${priceList[0].value}` 
    }   
    // set current price   
    for(let i = 0; i < priceList.length; i++){
        currentPrice[i].innerHTML = `$${priceList[i].value}` 
    }
})

function getPrices(){
    for(let i = 0; i < priceList.length; i++){
        priceList[i].addEventListener('change', function(event){
            for(let i = 0; i < priceList.length; i++){
                background[i].classList.remove('active')
                showBlock[i].classList.remove('active')
            }
            price = event.target.value
            setPrices()
            background[i].classList.add('active')
            showBlock[i].classList.add('active')
        })
    }    
}

function setPrices(){
    for(let item of productPrices){
        item.innerHTML = `$${price}`
    }   
}

getPrices()

