
let info = [
    {
        price: 'I Love Masha'
    },

   
]

function addProduct (){
    for(i = 0; i < 1000; i++){
        document.getElementById('catalog').innerHTML += `<div style='width:150px; border:1px solid red; color:purple;'>${info[0].price}</div>`
    }
}

addProduct()
