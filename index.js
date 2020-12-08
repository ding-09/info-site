const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let fileName = '';

  switch (req.url) {
    case '/':
      fileName = 'index.html';
      break;
    case '/about':
      fileName = 'about.html';
      break;
    case '/contact':
      fileName = 'contact.html';
      break;
    default:
      fileName = '404.html';
  }

  fs.readFile(path.join(__dirname, fileName), (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

server.listen(8080);
