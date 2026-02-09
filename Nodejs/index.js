// import { sum, sub, mult } from "./Maths.js";

// // console.log(sum(2, 3));

// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("SAURABH BANSAL");
//   console.log(text);
// }

// doStuff();

// import * as googleTTS from 'google-tts-api'; // ES6 or TypeScript

// // get audio URL
// const url = googleTTS.getAudioUrl('Hello Students', {
//   lang: 'en',
//   slow: false,
//   host: 'https://translate.google.com',
// });
// console.log(url); // https://translate.google.com/translate_tts?...

// import os from "node:os";

// console.log(os.loadavg());

import fs from "fs";

// fs.writeFileSync('./test.txt', " I am file ")
// fs.writeFile("./text1.txt", "I am file2 ", (err) => {
//   console.log(err);
// });

// const res = fs.readFileSync("./test.txt", "utf-8");
// const res = fs.readFile(
//   "./text1.txt",
//   {
//     encoding: "utf-8",
//   },
//   (err, data) => {
//     console.log(err, data);
//   },
// );
// console.log(res);

// fs.unlinkSync('./test.txt')

// fs.mkdirSync('./test')

fs.rmdirSync('./test')
