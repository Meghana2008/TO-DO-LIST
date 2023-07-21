const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function createTaskElement(task) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");

  const taskText = document.createElement("div");
  taskText.textContent = task;
  taskElement.appendChild(taskText);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = () => editTask(taskText, task);
  taskElement.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => deleteTask(taskElement);
  taskElement.appendChild(deleteButton);

  return taskElement;
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    showError("Task cannot be empty!");
    return;
  }

  const taskElement = createTaskElement(taskText);
  taskList.appendChild(taskElement);

  taskInput.value = "";
}

function editTask(taskTextElement, currentTaskText) {
  const newTaskText = prompt("Edit task:", currentTaskText);
  if (newTaskText !== null) {
    taskTextElement.textContent = newTaskText.trim();
  }
}

function deleteTask(taskElement) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskList.removeChild(taskElement);
  }
}

function showError(errorMessage) {
  const errorElement = document.createElement("div");
  errorElement.classList.add("error");
  errorElement.textContent = errorMessage;

  const container = document.querySelector(".container");
  container.appendChild(errorElement);

  setTimeout(() => {
    container.removeChild(errorElement);
  }, 3000);
}

// Pressing Enter key to add a task
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
