let btnPlus = document.querySelector('.btnPlus')
let btnMinus = document.querySelector('.btnMinus')
let btnClear = document.querySelector('.btnClear')

let counter = document.querySelector('.CounterTerorist')

let number = 0


btnPlus.onclick = function() {
    number++
    counter.innerHTML = number
}


btnMinus.onclick = function() {
    number--
    counter.innerHTML = number
}


btnClear.onclick = function() {
    number = 0
    counter.innerHTML = number
}
