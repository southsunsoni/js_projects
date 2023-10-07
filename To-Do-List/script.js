var toDo_List = new Array();
const Addtask = document.getElementById("add");
var input = document.getElementById("todo");
const delete_button = document.getElementById("delete");
const options = document.getElementById("options");
const task = document.createElement('li');
delete_button.addEventListener('click', delete_task);
Addtask.addEventListener('click', addTask);

function addTask(input) {
    toDo_List.push(input);
    task.innerHTML = input.value;
}

function delete_task(task) {
    toDo_List.pop(task)
        //mentenant il faut actualiser la liste des taches 
}