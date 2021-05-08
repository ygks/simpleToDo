var toDos = ["javascriptten nefret et", "phpyi daha çok sev", "vimden çık artık", "javascripten daha çok nefret et"];
var toDoInput = document.getElementById('todo-input');
var table = document.getElementById('todo-table');
var toDoValue = toDoInput.value
function pushElement() {
    toDos.push(toDoInput.value);
    toDoInput.value = "";
}
function printScreen() {
    table.innerHTML = "";
    for(i=0; i<toDos.length; i++){
        var row = table.insertRow(i);
        row.innerHTML = toDos[i] + " " + "<a href='javascript:dropToDo("+i+")'>Sil [X]</a>";
    }
}
function dropToDo(i) {
    toDos.splice(i, 1);
    printScreen();
}
printScreen();