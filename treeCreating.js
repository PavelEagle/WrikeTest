const http = new XMLHttpRequest();

// http.open("GET", "test1.json",false); // Тестовый JSON файл
http.open("GET", "https://raw.githubusercontent.com/wrike/frontend-test/master/data.json",false); // Отправляем get запрос на url
http.send(); // Получаем запрос


const tree = JSON.parse(http.responseText); //  Парсим JSON и получаем массив объектов

// console.log(tree); // Для отладки

let sortTree = tree.slice().sort((a,b)=>              // Сортируем массив по возрастанию свойства parentId, 
  a.parentId!==null? a.parentId-b.parentId : -1);     // null помещаем в начало массива;

// console.log(sortTree); // Для отладки

function treeCreating(treeData) {
  treeData.forEach(function (key) { 
    if (key.parentId==null) {                         // Создание корневой папки;
      let test = document.getElementById('tree');     // Создание элементов 
      let ulElem = document.createElement('ul');       // <ul>, <li>, <span> ;
      let liElem = document.createElement('li');
      let span = document.createElement('span');

      //Формирование списка, заворачиваем в span для анимации сворачивания/разворачивания;
      test.appendChild(ulElem).appendChild(liElem).appendChild(span);   

      span.innerText = key.title;                     
      liElem.id = 'root';                  
      span.className = 'caret';
    }
    if (key.parentId==-1) {
      let firstLevel= document.getElementById('root');
      let ulElem = document.createElement('ul');
      let liElem = document.createElement('li');
      let span = document.createElement('span');

      firstLevel.appendChild(ulElem).appendChild(liElem).appendChild(span);

      span.innerText = key.title;
      liElem.id = `second-level id-${key.id}`;         // К классу добавляем id для дальнейшей 
      span.className = `caret id-${key.id}`;          // идетификации родителя дочерними элементов
      ulElem.className = 'nested active';
    }
    if (key.parentId>=1) {
        let secondLevel = document.getElementById(`second-level id-${key.parentId}`); // Ищем родительский элемент по id
        let liElem = document.createElement('li');
        let ulElem = document.createElement('ul');

        secondLevel.appendChild(ulElem).appendChild(liElem);

        liElem.innerText = key.title;
        ulElem.className = 'nested active'; 
      }
  });
}

window.onload = treeCreating(sortTree); // Создание дерева при загрузке страницы;



