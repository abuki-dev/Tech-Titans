const container = document.querySelector(".tasks");
const TASK_CLASS = "task";
const CREATE = document.getElementById("create");
const TITLE = document.getElementById("title");
const Descr = document.getElementById("description");
const PRIORITY = document.getElementById("priority");
function createtask() {
  let taskcontainer = document.createElement("div");
  let title = document.createElement("h3");
  let description = document.createElement("p");
  let priority = document.createElement("span");
  title.textContent = TITLE.value;
  description.textContent = Descr.value;
  priority.textContent = PRIORITY.value;
  taskcontainer.className = TASK_CLASS;
  taskcontainer.append(title, description, priority);
  container.append(taskcontainer);
  document.querySelector("form").reset();
}
CREATE.addEventListener("click", () => {
  if (!TITLE.value || !Descr.value || !PRIORITY.value) {
    alert("fill the form first");
    return;
  }
  createtask();
});
