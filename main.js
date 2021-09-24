// console.log('hello world');

//todo 
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');
let addToDoButton = document.getElementById('addTodo');


addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p'); // varje gång du trycker på knappen skapas ett p 
    paragraph.classList.add('paragraph-styling'); //add css 
    paragraph.innerText = inputField.value;
    toDoContainer.append(paragraph); //lägger till p -> container
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        remove(paragraph);
    })
})

//knapp med olika hälsningar 

var d = new Date();
console.log(d);

function myTime() {
    var time = new Date().getHours(); //getHours returnerar värde 0-23 
    var greeting;
    if (time < 10) {
        greeting = "God morgon";
    } else if (time < 14)
        greeting = "God eftermiddag";
    else {
        greeting = "God kväll";
    }
    document.getElementById("output").innerHTML = greeting;
}

//for loop
//variabel i = 0, condition kommer köra loopen så längre det är true 
//alltså i är mindre än 5 
//lägger till 1 till i 
function forloop() {
    for (let i = 0; i < 5; i++) {
        console.log('Hello');
    }
}