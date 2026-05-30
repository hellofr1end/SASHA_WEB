


let dexterSound = new Audio('dexter-meme.mp3')
let bush = document.querySelector('.bush')
let negr = document.querySelector('.negr')

bush.addEventListener('mouseover', function(){
    negr.classList.add('active')
    dexterSound.play();
})

bush.addEventListener('mouseout', function(){
    negr.classList.remove('active')
    dexterSound.pause();
    dexterSound.currentTime = 0;
})
