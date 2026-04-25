
let durak = document.querySelector('.my_h1')
let cheburek = document.querySelector('#cheburek')
let colorButton = document.querySelector('.btn')

let testContainer = document.querySelector('.testDiv')

colorButton.onclick = function(){
    cheburek.style.color = 'red';
    cheburek.textContent = 'ЗАЧЕМ ТЫ НАЖАЛ НА КНОПКУ??!?!?!'
    testContainer.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/ru/b/b4/Herobrine.png" alt="тут херобрин должен был быть">'
}
