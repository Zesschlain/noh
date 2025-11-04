const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Tampilkan daftar tugas
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Hapus";
    delBtn.classList.add("delete");
    delBtn.onclick = () => deleteTask(index);

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Tambah tugas baru
function addTask() {
  const newTask = taskInput.value.trim();
  if (newTask === "") {
    alert("Tulis tugas dulu ya!");
    return;
  }
  tasks.push(newTask);
  taskInput.value = "";
  saveTasks();
}

// Hapus tugas
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
}

// Simpan ke local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// Event Listener
addTaskBtn.addEventListener("click", addTask);

// Tampilkan data saat pertama dibuka
renderTasks();
