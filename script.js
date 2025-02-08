// انتخاب عناصر از DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");


// افزودن کار جدید به لیست
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim(); // حذف فاصله‌های اضافی

    if (taskText === "") {
        alert("Please Add a job!"); // جلوگیری از افزودن متن خالی
        return;
    }

    // ساخت عنصر جدید برای نمایش کار
    const li = document.createElement("li");
    li.textContent = taskText;

    // دکمه حذف
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-btn");

    // حذف کار از لیست هنگام کلیک روی دکمه حذف
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    // اضافه کردن دکمه حذف به آیتم لیست
    li.appendChild(deleteButton);

    // اضافه کردن آیتم جدید به لیست
    taskList.appendChild(li);

    // پاک کردن ورودی بعد از افزودن
    taskInput.value = "";
});
    