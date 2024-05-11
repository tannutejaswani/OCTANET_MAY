let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        tasks.push({text: taskText, completed: false});
        taskInput.value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let listItem = document.createElement("li");
        listItem.innerText = task.text;
        if (task.completed) {
            listItem.classList.add("completed");
        }
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = () => deleteTask(index);
        listItem.appendChild(deleteButton);
        listItem.onclick = () => toggleTask(index);
        taskList.appendChild(listItem);
    });
}
