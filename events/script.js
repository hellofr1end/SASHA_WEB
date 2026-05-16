let cat = document.querySelector('.cat');
let btn = document.querySelector('.feed-btn');
let msg = document.querySelector('.cat-msg');
let catWidth = 100;

btn.addEventListener('click', function() {
    catWidth = catWidth + 20; // Увеличиваем размер
    cat.style.width = catWidth + 'px';


// самостоятельно подумать как проверить что хватит увеличивать кота
