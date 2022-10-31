function addProductHat (){
    document.getElementById('product_list').innerHTML = ''

    for(i = 0; i < 5; i++){
        
        document.getElementById('product_list').innerHTML += 
        `<div class="product_block"> 
            <div class="button_buy"> 
                Добавить в корзину 
            </div> 
            <img class="product_img" src='imgs/product/hat/${hat[i].img}'>
            <p class="p_name">${hat[i].name}</p> 
            <p class = "p_info">${hat[i].info}</p> 
            <p class="p_price">${hat[i].price}$</p> 
        </div>`
    }
}

addProductHat()

function addProductUpClothes (){

    document.getElementById('product_list').innerHTML = ''

    for(i = 0; i < 9; i++){
        document.getElementById('product_list').innerHTML += 
        `<div class="product_block"> 
            <div class="button_buy"> 
                Добавить в корзину 
            </div> 
            <img class="product_img" src='imgs/product/UpClothes/${upClothes[i].img}'>
            <p class="p_name">${upClothes[i].name}</p> 
            <p class = "p_info">${upClothes[i].info}</p> 
            <p class="p_price">${upClothes[i].price}$</p> 
        </div>`
    }
}

function addProductHoodie (){
    document.getElementById('product_list').innerHTML = ''

    for(i = 0; i < 6; i++){
        document.getElementById('product_list').innerHTML += 
        `<div class="product_block"> 
            <div class="button_buy"> 
                Добавить в корзину 
            </div> 
            <img class="product_img" src='imgs/product/hoodie/${hoodie[i].img}'>
            <p class="p_name">${hoodie[i].name}</p> 
            <p class = "p_info">${hoodie[i].info}</p> 
            <p class="p_price">${hoodie[i].price}$</p> 
        </div>`
    }
}

function addProductTShirt (){

    document.getElementById('product_list').innerHTML = ''

    for(i = 0; i < 6; i++){
        document.getElementById('product_list').innerHTML += 
        `<div class="product_block"> 
            <div class="button_buy"> 
                Добавить в корзину 
            </div> <img class="product_img" src='imgs/product/t-shirt/${tshirt[i].img}'>
            <p class="p_name">${tshirt[i].name}</p> 
            <p class = "p_info">${tshirt[i].info}</p> 
            <p class="p_price">${tshirt[i].price}$</p> 
        </div>`
    }
}

function addProductLeggings (){

    document.getElementById('product_list').innerHTML = ''

    for(i = 0; i < 6; i++){
        document.getElementById('product_list').innerHTML += 
        `<div class="product_block"> 
            <div class="button_buy"> 
                Добавить в корзину 
            </div> 
            <img class="product_img" src='imgs/product/leggings/${leggings[i].img}'>
            <p class="p_name">${leggings[i].name}</p> 
            <p class = "p_info">${leggings[i].info}</p> 
            <p class="p_price">${leggings[i].price}$</p> 
        </div>`
    }
}

function addProductDress (){

    document.getElementById('product_list').innerHTML = ''

    for(i = 0; i < 6; i++){
        document.getElementById('product_list').innerHTML += 
        `<div class="product_block"> 
            <div class="button_buy"> 
                Добавить в корзину 
            </div> 
            <img class="product_img" src='imgs/product/dress/${dress[i].img}'>
            <p class="p_name">${dress[i].name}</p> 
            <p class = "p_info">${dress[i].info}</p> 
            <p class="p_price">${dress[i].price}$</p> 
        </div>`
    }
}

function addProductShoes (){

    document.getElementById('product_list').innerHTML = ''

    for(i = 0; i < 11; i++){
        document.getElementById('product_list').innerHTML += 
        `<div class="product_block"> 
            <div class="button_buy"> 
                Добавить в корзину 
            </div>
            <img class="product_img" src='imgs/product/shoes/${shoes[i].img}'>
            <p class="p_name">${shoes[i].name}</p> 
            <p class = "p_info">${shoes[i].info}</p> 
            <p class="p_price">${shoes[i].price}$</p> 
        </div>`
    }
}

function addProductBag (){

    document.getElementById('product_list').innerHTML = ''

    for(i = 0; i < 6; i++){
        document.getElementById('product_list').innerHTML += 
        `<div class="product_block"> 
            <div class="button_buy"> 
                Добавить в корзину 
            </div> 
            <img class="product_img" src='imgs/product/bag/${bag[i].img}'>
            <p class="p_name">${bag[i].name}</p> 
            <p class = "p_info">${bag[i].info}</p> 
            <p class="p_price">${bag[i].price}$</p> 
        </div>`
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let sum = 0

function editCart(){
   
    let cartDisp = document.getElementById('cart_block').style.display

    if(cartDisp == 'none'){

        document.getElementById('cart_block').style.display='block';

    }else{

        document.getElementById('cart_block').style.display='none';

    }
}

function openCart(){

    window.scrollTo(0,0)

    document.getElementById('cart_block').style.display = 'block'
        
}

function addToCart(){
    document.getElementById('product_list').addEventListener('click',(e)=>{
    let img = e.target.parentNode.querySelector('.product_img').src
    let name = e.target.parentNode.querySelector('.p_name').innerHTML
    let info = e.target.parentNode.querySelector('.p_info').innerHTML
    let price = e.target.parentNode.querySelector('.p_price').innerHTML
    console.log(img,name,info,price)

    document.getElementById('cart_body').innerHTML += 
    `<div id="cart_productBlock">
        <img src=${img} id="cart_productImg">
        <div id="cart_productInfo">
            <p id="cart_productName">${name}</p>
            <p id="cart_productId">артикул</p>
        </div>
            <p id="cart_productInfo">${info}</p>
        <input required  type="text" id="cart_productFunc" placeholder="Размер">
        <input required type="text" id="cart_productFunc" placeholder="Кол-во">
        <p id="cart_productPrice">${price}</p>      
    </div>`
    let summa = sum += +price.replace(/\$/g, '')

    document.getElementById('cart_price').innerHTML = `Сумма заказа:<span id = "cart_FullPrice"> ${summa.toFixed(2)} $ </span>`
    
})
}

addToCart()

function addedToCart(){
    document.getElementById('product_list').addEventListener('click',(e)=>{
    
        if(e.target.innerHTML = 'Добавить в корзину')
        {
            e.target.innerHTML = 'Добавлено' 
        }

    }
)}

addedToCart()

function closeCart(){
    document.getElementById('cart_block').style.display = 'none'
}

function buyCart(){

    prompt('Введите данные карты')

    alert('Спасибо за покупку. Мы будем скучать!')

    document.getElementById('cart_block').style.display = 'none'
}







