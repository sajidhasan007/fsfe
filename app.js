const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.write('Hello from node js server');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
