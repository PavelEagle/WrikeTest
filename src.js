const http = new XMLHttpRequest();

http.open("GET", "https://raw.githubusercontent.com/wrike/frontend-test/master/data.json",false);
http.send();

const tree = JSON.parse(http.responseText);

console.log(tree);

let sortTree = Object.values(tree).sort(function (a,b) {
  if (a.parentId==null) {
    return -1;
  }
  return a.parentId-b.parentId;
});

console.log(sortTree);

sortTree.forEach(function (key) { 
    // console.log(key.parentId);
    if (key.parentId==null) {
      let test = document.getElementById('test');
      let ulObj = document.createElement('ul');
      let liObj = document.createElement('li');
      let span = document.createElement('span');
      test.appendChild(ulObj); 
      ulObj.appendChild(liObj); 
      liObj.appendChild(span);
      span.innerText = key.title;
      liObj.id = 'first-level';
      span.className = 'caret';
    }
    if (key.parentId==-1) {
      let firstLevel= document.getElementById('first-level');
      let ulObj = document.createElement('ul');
      let liObj = document.createElement('li');
      let span = document.createElement('span');
      firstLevel.appendChild(ulObj); 
      ulObj.appendChild(liObj); 
      liObj.appendChild(span);
      span.innerText = key.title;
      liObj.id = 'second-level';
      span.className = 'caret';
      ulObj.className = 'nested';
    }
    if (key.parentId>=1) {
        let secondLevel = document.getElementById('second-level');
        let liObj = document.createElement('li');
        let ulObj = document.createElement('ul');
        liObj.innerText = key.title;
        secondLevel.appendChild(ulObj); 
        ulObj.appendChild(liObj);
        ulObj.className = 'nested';
    }
});