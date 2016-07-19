/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

//请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量。
var http = require('http');
//接下来我们调用 http 模块提供的函数： createServer 。这个函数会返回 一个web服务器对象，这个对象有一个叫做 listen 的方法，定义了web服务器的端口和主机.
http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.end('Hey, boys!\n');
}).listen(3000,"127.0.0.1");
console.log("Server running at http://127.0.0.1:3000");