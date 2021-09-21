console.log('hello world');

let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');
let addToDoButton = document.getElementById('addTodo');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
})