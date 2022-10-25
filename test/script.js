function fun1() {
    let chbox= document.getElementById('check');
    let img = document.getElementById('heart')
        if (chbox.checked) {
            img.outerHTML = '<img id = "heart" src="../test/icons8-сердце-32 (1).png" alt="">'
        }
        else {
            img.outerHTML = '<img id = "heart" src="../test/icons8-сердце-32.png" alt="">'
        }
    }