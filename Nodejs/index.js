import { sum, sub, mult } from "./Maths.js";

// console.log(sum(2, 3));

import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("SAURABH BANSAL");
  console.log(text);
}

doStuff();
