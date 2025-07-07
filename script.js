function openfeatures() {
  var allElem = document.querySelectorAll(".elem");
  var fullElemsPage = document.querySelectorAll(".fullElem");
  var fullElemsPageBackBtn = document.querySelectorAll(".back_btn");

  allElem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      // console.log(elem.id);
      fullElemsPage[elem.id].style.display = "block";
    });
  });

  fullElemsPageBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemsPage[back.id].style.display = "none";
      // console.log(fullElems[back.id])
    });
  });
}
openfeatures();

function toDoList() {
  let form = document.querySelector(".add-task form");
  let taskInput = document.querySelector(".add-task form input");
  let taskDetailsInput = document.querySelector(".add-task form textarea");
  let taskCheckbox = document.querySelector(".add-task form #check");
  let submit_btn = document.querySelector(".add-task form button");
  let currentTasks = [];
  if (localStorage.getItem("currentTask")) {
    currentTasks = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is empty");
  }
  function renderTask() {
    let allTasks = document.querySelector(".all-task");
    var sum = "";
    currentTasks.forEach(function (elem, idx) {
      sum += `<div class="task">
        <h5>${elem.task} <span class = "${elem.imp}">imp</span></h5>
        <button id = "${idx}">Mark as complete</button>
        </div>`;
    });
    allTasks.innerHTML = sum;
    localStorage.setItem("currentTask", JSON.stringify(currentTasks));
    document.querySelectorAll(".task button").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentTasks.splice(btn.id, 1);
      renderTask();
    });
  });
  }
  renderTask();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(taskCheckbox.checked);
    currentTasks.push({
      task: taskInput.value,
      Details: taskDetailsInput.value,
      imp: taskCheckbox.checked,
    });
    renderTask();
    taskInput.value = "";
    taskDetailsInput.value = "";
    taskCheckbox.checked = false;
    //   else use location.reload()
  });
}
toDoList()
