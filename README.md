# WrikeTest
WrikeTest

Необходимо: 
1) Получить JSON с помощью Get-запроса на адрес https://raw.githubusercontent.com/wrike/frontend-test/master/data.json;
2) Получить массив элементов { id: number, title: string, parentId: number };
3) Отрисовать дерево дерево папок с вложенностью (корень id = -1);
4) Добавить анимацию для сворачивания/разворачивания списка;
5) Строка фильтрации;
6) Сортировка по возрастанию/убиыванию;

Итог: 
1) На основе JSON формируется DOM. На данном этапе функция может формировать DOM только до 2-х степеней вложенности;
2) Реализована анимация сворачивания/разворачивания списка;
3) Реализована функция сортировки по возрастанию/убиыванию;

Что можно доработать: 
1) Большую степень вложенности;
2) Строка фильтрации;
