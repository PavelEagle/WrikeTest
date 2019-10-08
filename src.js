const http = new XMLHttpRequest();

// http.open("GET", "test1.json",false); // Тестовый JSON файл
http.open("GET", "https://raw.githubusercontent.com/wrike/frontend-test/master/data.json",false); // Отправляем get запрос на url
http.send(); // Получаем запрос

const tree = JSON.parse(http.responseText); //  Парсим JSON и получаем массив объектов

// console.log(tree); // Для отладки

let sortTree = tree.sort(function (a,b) {    // Сортируем массив по возрастанию свойства parentId, 
  if (a.parentId==null) {                    // null помещаем в начало массива;
    return -1;
  }
  return a.parentId-b.parentId;
});

// console.log(sortTree); // Для отладки

sortTree.forEach(function (key) { 
    if (key.parentId==null) {                         // Создание корневой папки;
      let test = document.getElementById('tree');     // Создание элементов 
      let ulObj = document.createElement('ul');       // <ul>, <li>, <span> ;
      let liObj = document.createElement('li');
      let span = document.createElement('span');
      test.appendChild(ulObj);                        // Формирование списка 
      ulObj.appendChild(liObj);                       // в div с классом tree;
      liObj.appendChild(span);                        // Оборачиваем элемент списка в span для 
      span.innerText = key.title;                     // создания анимации сворачивания/разворачивания;
      liObj.id = 'root';                  
      span.className = 'caret';
    }
    if (key.parentId==-1) {
      let firstLevel= document.getElementById('root');
      let ulObj = document.createElement('ul');
      let liObj = document.createElement('li');
      let span = document.createElement('span');
      firstLevel.appendChild(ulObj); 
      ulObj.appendChild(liObj); 
      liObj.appendChild(span);
      span.innerText = key.title;
      liObj.id = `second-level id-${key.id}`;         // К классу добавляем id для дальнейшей 
      span.className = `caret id-${key.id}`;          // идетификации родителя дочерними элементов
      ulObj.className = 'nested';
    }
    if (key.parentId>=1) {
        let secondLevel = document.getElementById(`second-level id-${key.parentId}`); // Ищем родительский элемент по id
        let liObj = document.createElement('li');
        let ulObj = document.createElement('ul');
        liObj.innerText = key.title;
        secondLevel.appendChild(ulObj); 
        ulObj.appendChild(liObj);
        ulObj.className = 'nested active'; 
    }
});
