const addTicketButton = document.querySelector(".add-button-container");
const tickerAdderBlock = document.querySelector(".ticker-adder-block");
const ticketAdderColorContainer = document.querySelector(
  ".ticket-adde-color-container"
);

addTicketButton.addEventListener("click", function () {
  tickerAdderBlock.classList.toggle("hide");
});

ticketAdderColorContainer.addEventListener("click", function (event) {
  console.log(event);
});
