function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    li.querySelector("span").addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    input.focus();
}

function deleteTask(button) {
    button.parentElement.remove();
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
