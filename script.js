const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById("task-list");

let tasksarr = [];

addBtn.addEventListener("click", () => {
    const text = taskInput.value;
    if (text === "") {
        alert("Please enter a task");
        return;
}

const obj = { id: Date.now(), text: taskInput.value, done: false };
tasksarr.push(obj);
taskInput.value = "";
console.log(tasksarr);
display();
});

function display () {
    taskList.innerHTML = "";
    tasksarr.forEach (displayTask => {
        const li = document.createElement("li");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.checked = displayTask.done;

        const span = document.createElement("span");
        span.textContent = displayTask.text;

        checkbox.addEventListener("change", () => {
            displayTask.done = checkbox.checked;
            display();
});
    const delBtn = document.createElement("button");
    delBtn.innerHTML = 'delete';
    delBtn.classList.add("delBtn");
    delBtn.addEventListener("click", () => {
        tasksarr = tasksarr.filter(delTask => delTask.id !== displayTask.id);
        display();
});

    const editBtn = document.createElement("button");
    editBtn.innerHTML = 'Edit';
    editBtn.classList.add("editBtn");
    editBtn.addEventListener("click", () => {
        let p = prompt("Edit task: " , displayTask.text);
        if(p !== null){
            if(p !== ""){
            displayTask.text = p;
            display();
            }else{
            alert("Edit a task!");
            }
        }
    });

if (displayTask.done) {
    span.classList.add("done");
}
      
li.append(checkbox,span, editBtn, delBtn);
taskList.appendChild(li);

});
}