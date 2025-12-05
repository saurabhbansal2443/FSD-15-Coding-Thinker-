const input = document.getElementById("input");
const button = document.getElementById("button");
const boxContainer = document.getElementById("boxContainer");

button.addEventListener("click", function () {
  const numberOfBoxes = input.value;
  console.log(numberOfBoxes);
  for (let i = 1; i <= numberOfBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("square");
    boxContainer.appendChild(box);
  }
  
});
