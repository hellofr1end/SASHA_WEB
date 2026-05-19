let btn = document.querySelector('.btn')
let checkbox = document.querySelector('.check')


checkbox.addEventListener('change', function(){
    if (checkbox.checked === true){
        btn.disabled = false
    }
    else{
        btn.disabled = true
    }
})
