const http = require('http');
const request = require('request');

const hostname = '127.0.0.1';
const port = 3001;
const data = {}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('FTX Api Server - Node.JS');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

request('https://ftx.com/api/markets', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        const data = body // Data
        console.log(data)
     }   
     return data
})     



