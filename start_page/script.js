function up(){
    window.scrollTo(0,0)
}

function addProduct (){
    for(i = 0; i < 5; i++){
        document.getElementById('offers_list').innerHTML += 
        `<div class="product_offers"><img class="offer_img src="imgs/product/hat/${offer[i].img}" alt=""> <p class="p_name">${offer[i].name}</p> <p>${offer[i].info}</p> <p class="p_price">${offer[i].price}$</p> </div>`
    }
}

addProduct()

function registration(){
    window.scrollTo(0,0)
    document.getElementById('block').style = 'display: grid; opacity:2; z-index:1 '
}

function catalog_main(){
    window.scrollTo(0,0)
    document.getElementById('categories_block').style = 'position: absolute; right:15px; top:60px; width:200px; border:1px solid black; background-color:rgb(222, 232, 233); border-radius:5px'
}

