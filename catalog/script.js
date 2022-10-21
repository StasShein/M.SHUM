function addProduct (){
    for(i = 0; i < 5; i++){
        document.getElementById('product_list').innerHTML += 
        `<div class="product_block"> <div class="button_buy"> Перейти к товару </div> <img class="product_img src="imgs\/product\/hat\/${hat[i].img}" alt=""> <p class="p_name">${hat[i].name}</p> <p>${hat[i].info}</p> <p class="p_price">${hat[i].price}$</p> </div>`
    }
}

addProduct()