let input = document.querySelector('.userInput');
let addBtn = document.querySelector('.add-btn');
let tasks = document.querySelector('.tasks');

// Load tasks from local storage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', addTaskOnKeypress);
tasks.addEventListener('click', deleteOrCompleteTask);

function taskValue(taskText, completed = false) {
  let newItem = document.createElement('div');
  newItem.classList.add('item');
  if (completed) {
    newItem.classList.add('completed');
  }
  newItem.innerHTML = `
                <p> ${taskText}</p>
                <div class="task-btns">
                    <i class="fas fa-check-circle chk-btn" id="chk-btn"></i>
                    <i class="fa fa-trash delete-btn"></i>
                </div>
            `;
  tasks.appendChild(newItem);
}

function addTask(e) {
  e.preventDefault();
  if (input.value.trim() != 0) {
    taskValue(input.value);
    saveTaskToLocalStorage(input.value);
    input.value = '';
  }
}

function addTaskOnKeypress(event) {
  if (input.value.trim() != 0 && event.keyCode === 13) {
    taskValue(input.value);
    saveTaskToLocalStorage(input.value);
    input.value = '';
  }
}

function deleteOrCompleteTask(e) {
  if (e.target.classList.contains('delete-btn')) {
    let task = e.target.parentElement.parentElement;
    removeTaskFromLocalStorage(task.textContent.trim());
    task.remove();
  } else if (e.target.classList.contains('chk-btn')) {
    let task = e.target.parentElement.parentElement;
    task.classList.toggle('completed');
    toggleTaskCompletionInLocalStorage(task.textContent.trim());
  }
}

function saveTaskToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push({ text: task, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function (task) {
    taskValue(task.text, task.completed);
  });
}

function removeTaskFromLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter((task) => task.text !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function toggleTaskCompletionInLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.map((task) => {
    if (task.text === taskText) {
      task.completed = !task.completed;
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
