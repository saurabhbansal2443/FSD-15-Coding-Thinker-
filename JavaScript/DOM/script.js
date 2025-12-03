// const h1tag = document.getElementById("h1tag"); // Getting element using the ID
// const pTag = document.querySelector("p");

// h1tag.innerHTML = "Changed through JS"
// console.dir(h1tag);

// console.dir(pTag);

const image = document.querySelector("img");

// image.src = "image2.jpeg"
let flag = true;
image.addEventListener("click", function () {
  if (flag) {
    image.src = "image2.jpeg";
  } else {
    image.src = "image1.jpeg";
  }
  flag = !flag;
});
