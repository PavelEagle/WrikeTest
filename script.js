function caretAnimation () {

let toggler = document.getElementsByClassName("caret"); //Поиск всех элементов со стилем caret

for (let i = 0; i < toggler.length; i++) { 
  toggler[i].addEventListener("click", function() {                       // Для каждого элемента со стилем caret создаем событие на клик
    this.parentElement.querySelectorAll(".nested")                        // Ищем все дочерние элементы с классом nested
                      .forEach((elem)=>elem.classList.toggle("active"));  // Для каждого эелемента назначаем событие, добавляющее/убирающее класс active
    this.classList.toggle("caret-down");                                  // Добавляем/убираем класс caret-down у раскрывающегося элемента
  });
}

}

window.onload=caretAnimation();

function sortAZ () {                                          // Функция сортировки элементов по возрастанию;
  let removeElem = document.getElementById('tree');           // Удаление элементов из дерева;
    while(removeElem.firstChild) {
      removeElem.removeChild(removeElem.firstChild);
    }
  let sortTreeAZ=sortTree.slice().sort((a,b)=>
                a.parentId==b.parentId ? 1 : 0);  // Сортируем title по возрастанию;
                
    treeCreating(sortTreeAZ);               // Создаем дерево на основе нового объекта;
    caretAnimation();                       // Добалвяем анимацию раскрытия;
}

function sortZA () {                        // Функция сортировки элементов по убыванию;
  let removeElem = document.getElementById('tree');
    while(removeElem.firstChild) {
      removeElem.removeChild(removeElem.firstChild);
  }
  let sortTreeZA=sortTree.slice().sort((a,b)=>a.parentId==b.parentId ? -1 : 0);
    treeCreating(sortTreeZA);
    caretAnimation();
}