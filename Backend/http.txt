import http from "http";
import fs from "fs";
import { json } from "stream/consumers";

let productsData = fs.readFileSync("./Data.json", "utf-8");
let jsonProductData = JSON.parse(productsData);
let htmlFile = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.setHeader("Content-type", "text/html");
    res.end(htmlFile);
  } else if (req.url == "/products") {
    res.setHeader("Content-type", "text/json");
    res.end(productsData);
  } else if (req.url.startsWith("/products")) {
    let array = req.url.split("/");
    let index = array[array.length - 1];
    let title = jsonProductData[index]?.title;
    let description = jsonProductData[index]?.description;
    res.end(
      htmlFile
        .replace("{{--tittle--}}", title)
        .replace("{{--description--}}", description),
    );
  }
  //
});

server.listen(8080, () => {
  console.log("server started");
});
