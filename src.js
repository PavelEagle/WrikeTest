

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

const http = new XMLHttpRequest();

http.open("GET", "https://raw.githubusercontent.com/wrike/frontend-test/master/data.json",false);
http.send();

const tree = JSON.parse(http.responseText);

console.log(tree);

let mainTree = Object.values(tree).filter(x=>x.parentId==null);

let sortTree = Object.values(tree).filter(x=>x.parentId!=null).sort((a,b)=>a.parentId-b.parentId);

let total = {...mainTree, ...sortTree};

console.log(total);

tree.forEach(function (key) { 
    // console.log(key.parentId);
    if (key.parentId==-1) {
        let test = document.getElementById('test');
        let ulObj = document.createElement('ul');
        let liObj = document.createElement('li');
        liObj.innerText= key.title;
        test.appendChild(ulObj); 
        ulObj.appendChild(liObj); 
    }
    else {
        let test = document.getElementById('test');
        let liObj = document.createElement('li');
        let ulObj = document.createElement('ul');
        liObj.innerText= key.title;
        test.appendChild(ulObj); 
        ulObj.appendChild(liObj);
    }
});


// http.onload = () => console.log(response1);


