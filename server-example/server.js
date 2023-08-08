// const http = require('http')
// require is common js
//import is ES 6 modules. change package.json add "type":"module"
// const hostname = '127.0.0.1';
// const port = 3000;
//create server take a callback function with 2 params request and responds
// const server = http.createServer((req, res)=>{
    //200 means ok
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
// });
//listen has 3 params port, hostnamd cand callback function
// server.listen(port, hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// })
const express = require('express');
const port = 8080;
const app = express();
//get request define 'root' route on the app
app.get('/',(req,res)=>{
    //must respond with something or the page will always reload
    res.send('<h1>Hello World!</h1>')
})
app.get('/home',(req,res)=>{
    res.send('<h1>Home Page</h1>')
})
app.listen(port,()=>{
    console.log('Listening on port' + port)
})