console.log('hello world');

let inputField = document.getElementById('inputField');
let toDocontainer = document.getElementById('toDocontainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.nodeValue;
    toDoContainer.appendChild(paragraph);
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
})