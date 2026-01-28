const taskInput = document.getElementById("taskInput");
const dateTimeInput = document.getElementById("dateTimeInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const dateTime = dateTimeInput.value;

  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <div class="task-top">
      <span class="task-text">${taskText}</span>
      <div class="task-actions">
        <button class="complete-btn">✔</button>
        <button class="edit-btn">✏</button>
        <button class="delete-btn">🗑</button>
      </div>
    </div>
    <div class="date-time">${dateTime ? "Due: " + formatDate(dateTime) : ""}</div>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  dateTimeInput.value = "";

  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.querySelector(".task-text").classList.toggle("completed");
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  li.querySelector(".edit-btn").addEventListener("click", () => {
    const currentText = li.querySelector(".task-text").textContent;
    const newText = prompt("Edit task:", currentText);
    if (newText !== null && newText.trim() !== "") {
      li.querySelector(".task-text").textContent = newText;
    }
  });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString();
}
