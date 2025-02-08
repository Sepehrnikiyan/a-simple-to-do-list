// Select elements with DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Retrieve cached data when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

// Adding new jobs
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim(); // حذف فاصله‌های اضافی

    if (taskText === "") {
        alert("Please Add a job!"); // Prevent adding empty text
        return;
    }

    addTaskToDOM(taskText);
saveTaskToLocalStorage(taskText);

    // Empty the input field after adding item
    taskInput.value = "";
});

// Adding task to DOM
function addTaskToDOM(taskText) {
    // Creating new element for showing input text
    const li = document.createElement("li");
    li.textContent = taskText;

    // Remove button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-btn");

    // Remove jobs from the list and local storage & DOM
    deleteButton.addEventListener("click", function () {
        li.remove();
        removeTaskFromLocalStorage(taskText);
    });

    // Adding remove btn to list's items
    li.appendChild(deleteButton);

    // Adding new item to list
    taskList.appendChild(li);
}

// Save task to localStorage
function saveTaskToLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//  Loading saved jobs 
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

//   Deleting from localStorage
function removeTaskFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}