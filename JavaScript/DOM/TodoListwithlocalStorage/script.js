let addBtn = document.getElementById("addBtn");
let input = document.getElementById("input");
let taskContainer = document.querySelector(".taskContainer");

let taskArray = [];

addBtn.addEventListener("click", () => {
  let task = input.value.trim();
  if (task.length === 0) return;
  let taskObj = {
    id: Date.now(),
    taskInput: task,
  };
  taskArray.push(taskObj);
  localStorage.setItem("taskss", JSON.stringify(taskArray));
  createTasks(taskArray);
});

function createTasks(allTask) {
  taskContainer.innerHTML = "";
  for (let i = 0; i < allTask.length; i++) {
    let taskEle = document.createElement("div");
    taskEle.classList.add("task");

    taskEle.innerHTML = `<p>${allTask[i].taskInput}</p>
        <svg
        id="delete"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
          ></path>
        </svg>`;

    let deleteBtn = taskEle.querySelector("#delete");
    deleteBtn.addEventListener("click", () => {
      taskContainer.removeChild(taskEle); // Deleting from UI layer
      // deleting from taskArray
      let filteredTask = taskArray.filter(
        (taskobj) => taskobj.id !== allTask[i].id,
      );
    });
    taskContainer.appendChild(taskEle);
  }
}
