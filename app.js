var toDos = ["Worukout", "Study Coding", "Attempt to exit vim once again", "Try to understand why JavaScript made this way", "Add 0.1 and 0.2"];
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
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = toDos[i]
        cell2.innerHTML = "<a href='javascript:dropToDo("+i+")'>Remove [X]</a>";
    }
}
function dropToDo(i) {
    toDos.splice(i, 1);
    printScreen();
}
printScreen();