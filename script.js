// Select elements with DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Adding new jobs
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim(); // حذف فاصله‌های اضافی

    if (taskText === "") {
        alert("Please Add a job!"); // Prevent adding empty text
        return;
    }

    // Creating new element for showing input text
    const li = document.createElement("li");
    li.textContent = taskText;

    // Remove button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-btn");

    // Remove jobs from the list by clicking on the remove btn
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    // Adding remove btn to list's items
    li.appendChild(deleteButton);

    // Adding new item to list
    taskList.appendChild(li);

    // Empty the input field after adding item
    taskInput.value = "";
});
    