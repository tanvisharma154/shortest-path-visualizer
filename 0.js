function addTask() {
    let input = document.getElementById("task-input");
    let task = input.value.trim();
    if (task === "") return;
  
    let ul = document.getElementById("task-list");
  
    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="deleteTask(this)">❌</button>`;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    ul.appendChild(li);
    input.value = "";
  }
  
  function deleteTask(button) {
    button.parentElement.remove();
  }
  