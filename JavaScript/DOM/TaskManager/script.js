const addTicketButton = document.querySelector(".add-button-container");
const tickerAdderBlock = document.querySelector(".ticker-adder-block");
const ticketAdderColorContainer = document.querySelector(
  ".ticket-adde-color-container"
);

const ticketAdderTextArea = document.querySelector(".ticket-adder-text");
const taskAdderColors = document.querySelectorAll(".ticket-adde-color");
const tickerContainerBox = document.querySelector(".ticket-container");

let currentTaskAdderSelectedColor = "red";

let taskArray = []; // to store the task

let colorArray = ["red", "blue", "green", "black"];

let lockButtonSvg = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24" height="24"  fill="currentColor" >  <path    d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"  ></path> </svg>`;

let unlockButtonSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C14.7405 2 17.1131 3.5748 18.2624 5.86882L16.4731 6.76344C15.6522 5.12486 13.9575 4 12 4C9.23858 4 7 6.23858 7 9V10ZM5 12V20H19V12H5ZM10 15H14V17H10V15Z"></path></svg>`;

function toggleTickerAdder() {
  tickerAdderBlock.classList.toggle("hide");
}

addTicketButton.addEventListener("click", toggleTickerAdder);

ticketAdderColorContainer.addEventListener("click", function (event) {
  // Selecting the target container
  const targetContainer = event.target;
  // from targetContainer getting the color which user has selected
  currentTaskAdderSelectedColor = targetContainer.classList[1];
  // removing the border from all the colors
  for (let i = 0; i < taskAdderColors.length; i++) {
    let currentContainer = taskAdderColors[i];
    currentContainer.classList.remove("active-color");
  }
  // Adding the border class to target container
  targetContainer.classList.add("active-color");
});

ticketAdderTextArea.addEventListener("keydown", function (e) {
  let keyPressed = e.key;
  let task = ticketAdderTextArea.value;

  if (keyPressed == "Enter") {
    // create the ticket ;
    createTickets(task, currentTaskAdderSelectedColor);
    ticketAdderTextArea.value = "";
    toggleTickerAdder();
  }
});
//  <div class="ticket-block">
//   <div class="ticket-color red"></div>
//   <div class="ticket-task-area">
//     <div class="ticker-lock-button-container">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         width="24"
//         height="24"
//         fill="currentColor"
//       >
//         <path
//           d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"
//         ></path>
//       </svg>
//     </div>
//   </div>
// </div>
function createTickets(task, color) {
  let currentTaskObj = { task: task, color: color };
  taskArray.push(currentTaskObj);

  tickerContainerBox.innerHTML = "";

  for (let i = 0; i < taskArray.length; i++) {
    let taskObj = taskArray[i];

    let ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket-block");

    ticketDiv.innerHTML = `<div class="ticket-color ${taskObj.color}"></div>
  <div class="ticket-task-area">
   ${taskObj.task}
  <div class="ticker-lock-button-container">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path
          d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"
        ></path>
      </svg>
    </div>
   
  </div>`;

    const colorPanel = ticketDiv.querySelector(".ticket-color");
    // This function is handling the color change feature in ticket
    colorPanel.addEventListener("click", function () {
      let currentColor = taskObj.color;
      console.log(currentColor);
      let currentColorIdx = 0;
      for (let j = 0; j < colorArray.length; j++) {
        if (currentColor == colorArray[j]) {
          currentColorIdx = j;
        }
      }

      let nextColorIdx = (currentColorIdx + 1) % colorArray.length;
      colorPanel.classList.remove(currentColor);
      taskObj.color = colorArray[nextColorIdx];
      colorPanel.classList.add(colorArray[nextColorIdx]);
    });
    // To edit the task in the ticket

    let lockButton = ticketDiv.querySelector(".ticker-lock-button-container");
    let ticketTaskArea = ticketDiv.querySelector(".ticket-task-area");

    let lockFlag = false; // the lock is colsed

    lockButton.addEventListener("click", function () {
      if (lockFlag == false) {
        lockButton.innerHTML = unlockButtonSvg;
        ticketTaskArea.setAttribute("contenteditable", "true");
      } else {
        lockButton.innerHTML = lockButtonSvg;
        ticketTaskArea.setAttribute("contenteditable", "false");
        taskObj.task = ticketTaskArea.innerText;
      }
      lockFlag = !lockFlag;
    });

    tickerContainerBox.appendChild(ticketDiv);
  }
}
