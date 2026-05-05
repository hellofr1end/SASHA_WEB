

let catImg = document.querySelector('.cat-img')
let feedBtn = document.querySelector('.feedBtn')


fatHappyCatUrl = "https://i.ytimg.com/vi/Jo5PI9APyOg/sddefault.jpg"
sadHungryCat = "https://i.pinimg.com/originals/6d/a8/e6/6da8e6d1456bfb1345cfaedf4690448e.jpg"

feedBtn.onclick = function(){
    catImg.setAttribute('src', fatHappyCatUrl)
}
