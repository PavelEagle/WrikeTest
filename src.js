
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

// console.log();

//   tree.forEach(function (key) { 
//         console.log(key.title);
//         let test = document.getElementById('test');
//         let liObj = document.createElement('li');
//         liObj.innerText= key.title;
//         test.appendChild(liObj); 
//   });



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

