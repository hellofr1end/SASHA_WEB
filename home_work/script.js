let el = document.querySelector('.что-то')

// ЧАЩЕ ВСЕГО ИСПОЛЬЗУЮТ:
el.innerText = 'текст'           // поменять текст
el.innerHTML = '<b>HTML</b>'     // вставить с тегами
el.value = 'текст'               // для полей ввода
el.style.цвет = 'красный'        // поменять стиль
el.classList.add('класс')        // добавить класс
el.classList.remove('класс')     // убрать класс
el.classList.toggle('класс')     // переключить класс
el.append(новыйЭлемент)          // добавить внутрь
el.remove()                      // удалить
el.onclick = function() {}       // обработчик клика

// РЕЖЕ, НО НУЖНО:
el.parentElement                 // родитель
el.children                      // дети
el.getAttribute('src')           // получить атрибут
el.setAttribute('src', 'img')    // установить атрибут
el.contains(другой)              // проверить внутри ли
el.scrollIntoView()              // прокрутить к элементу
el.getBoundingClientRect()       // позиция и размеры
