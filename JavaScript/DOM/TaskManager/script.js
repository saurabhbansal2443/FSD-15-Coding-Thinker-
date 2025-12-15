const addTicketButton = document.querySelector(".add-button-container");
const tickerAdderBlock = document.querySelector(".ticker-adder-block");
const ticketAdderColorContainer = document.querySelector(
  ".ticket-adde-color-container"
);

const ticketAdderTextArea = document.querySelector(".ticket-adder-text");

const taskAdderColors = document.querySelectorAll(".ticket-adde-color");

let currentTaskAdderSelectedColor = "red";

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
    console.log("task", task, "color", currentTaskAdderSelectedColor);
    ticketAdderTextArea.value = "";
    toggleTickerAdder();
  }
});
