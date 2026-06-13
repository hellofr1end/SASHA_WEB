
let form = document.querySelector('.regForm')


form.addEventListener('submit', function(e){
    e.preventDefault();

    let data = new FormData(form);

    console.log('никнейм:', data.get('nickname'));
    console.log('фио:', data.get('fio'));
    console.log('пароль:', data.get('pass'));

})
