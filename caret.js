let toggler = document.getElementsByClassName("caret"); //Поиск всех элементов со стилем caret

for (let i = 0; i < toggler.length; i++) { 
  toggler[i].addEventListener("click", function() {                       // Для каждого элемента со стилем caret создаем событие на клик
    this.parentElement.querySelectorAll(".nested")                        // Ищем все дочерние элементы с классом nested
                      .forEach((elem)=>elem.classList.toggle("active"));  // Для каждого эелемента назначаем событие, добавляющее/убирающее класс active
    this.classList.toggle("caret-down");                                  // Добавляем/убираем класс caret-down у раскрывающегося элемента
  });
}
