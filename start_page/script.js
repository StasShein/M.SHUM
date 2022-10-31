function up(){
    window.scrollTo(0,0)
}

function addProductOffer (){
    for(i = 0; i < 5; i++){
        document.getElementById('offers_list').innerHTML += 
        `<div class="product_offers"> 
            <a href="../catalog/catalog.html"><img class="offer_img" src=${offer[i].img} alt="offer"></a> 
            <h3 style="font-weight:600; font-size:20px;">${offer[i].name}</p> 
            <p class="p_info">${offer[i].info}</p> 
            <p class="p_price">${offer[i].price}$</p> 
         </div>`
    }
}

addProductOffer()

function registrationOpen(){
    window.scrollTo(0,0)
    document.getElementById('block_reg').innerHTML = 
    
    `<div class="log_reg">
            
    <div class="login">
        <p>Вход</p>
    </div>

    <div class="registr" onclick="registrationStart()">
        <p>Регистрация</p>
    </div>

    </div>

    <div class="email">
        <p><input class="info_window" type="email" placeholder="E-mail"></p>
    </div>

    <div class="pass">
        <p><input class="info_window" type="password" placeholder="Введите пароль"></p>
    </div>

    <div class="remember">
        <input type="checkbox" id="remember_input"> Запомнить меня
    </div>

    <div class="enter">
        <input id="enter" type="submit" value="Вход" onclick="registrationClose()"></input>
    </div>

    <div class="forgot_pass">
        <p>Забыл пароль?</p>
    </div>`


    let regDisp = document.getElementById('block_reg').style.display

    if(regDisp =='none'){

        document.getElementById('block_reg').style.display='grid';

    }else{

        document.getElementById('block_reg').style.display='none';

    }
}

function registrationClose(){
    document.getElementById('block_reg').style = 'display: none;'
    document.querySelector('HTML').style.overflow = 'auto'
    alert('Вы вошли в аккаунт')
}
    
function registrationStart(){
    document.getElementById('block_reg').innerHTML = 
    `<div class="log_reg"> 
    <div class="login"  onclick="registrationOpen()" style = "opacity: 0.3; background-color: rgb(140, 151, 158);"> 
    <p>Вход</p> 
    </div> 
    <div class="registr" style = "opacity:1; border-right:1px solid rgb(128, 128, 128); background-color: rgb(177, 222, 248);" onclick="registrationStart()"> 
    <p>Регистрация</p> 
    </div> 
    </div> 
    <div class="email"> 
    <p><input class="info_window" type="email" placeholder="E-mail"></p> 
    </div> 
    <div class="pass"> 
    <p><input class="info_window" type="password" placeholder="Введите пароль"></p> 
    </div>
    <div class="pass"> 
    <p><input class="info_window" type="password" placeholder="Повторите Ваш пароль"></p> 
    </div>  
    <div class="enter"> 
    <input id="enter" type="submit" value="Вход" onclick="registrationClose()">
    </div>`
}

function openSearchSP(){

    searchDisp = document.getElementById('search_input').style.display;
 
    if(searchDisp =='none'){

        document.getElementById('search_input').style.display='block';

    }else{

        document.getElementById('search_input').style.display='none';

    }
}

function openCategoriesSP(){
    categoriesDisp = document.getElementById('categories_SP').style.display;
 
    if(categoriesDisp=='none'){

        document.getElementById('categories_SP').style.display='block';

    }else{

        document.getElementById('categories_SP').style.display='none';

    }
}




    
