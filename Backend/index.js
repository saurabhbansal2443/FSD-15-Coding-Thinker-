import http from "http";

const server = http.createServer((req, res) => {});

server.listen(8080, () => {
  console.log("server started");
});
