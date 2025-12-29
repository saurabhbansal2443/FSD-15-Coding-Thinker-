const input = document.getElementById("input");
const button = document.getElementById("button");
const boxContainer = document.getElementById("boxContainer");
const colorInput = document.getElementById("colorinput");
const shapeInput = document.getElementById("shape");
const textInput = document.getElementById("text");

function helper() {
  console.dir(input);
  const numberOfBoxes = input.valueAsNumber;
  const backgroundColor = colorInput.value;
  const shapeValue = shapeInput.value;
  const textInputValue = textInput.value;
  console.log(typeof numberOfBoxes);
  if (typeof numberOfBoxes !== "number") {
    alert("Please enter a number");
    return;
  }

  //   boxContainer.innerHTML = "";
  for (let i = 1; i <= numberOfBoxes; i++) {
    let box = document.createElement("div");

    box.classList.add(shapeValue);
    box.style.backgroundColor = backgroundColor;
    box.innerText = textInputValue;
    boxContainer.appendChild(box);
  }
}

button.addEventListener("click", helper);
