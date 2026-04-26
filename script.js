const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// Load saved tasks
loadTasks();

// Add task
addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    createTask(taskText);
    saveTasks();
    input.value = "";
}

// Create task element
function createTask(taskText) {
    const li = document.createElement("li");

    li.innerHTML = `
        <span>📌 ${taskText}</span>
        <div>
            <button class="complete-btn">✅</button>
            <button class="delete-btn">🗑️</button>
        </div>
    `;

    // Complete task
    li.querySelector(".complete-btn").addEventListener("click", function () {
        li.classList.toggle("completed");
        saveTasks();
    });

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    list.appendChild(li);
}

// Save tasks
function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML);
}

// Load tasks
function loadTasks() {
    list.innerHTML = localStorage.getItem("tasks") || "";
}
