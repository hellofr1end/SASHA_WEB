
let shar = document.querySelector(".shar")
let answerDiv = document.querySelector('.asnwerDiv')

let otveti = [
    'ДА!',
    'НЕТ',
    'Звезды говорят ДА',
    'Спроси позже',
    'Это невозможно'
]



shar.onclick = function(){ 
    let randomIndex = Math.floor(Math.random() * otveti.length)
    answerDiv.innerHTML = otveti[randomIndex]
}
