
const http = require('http');
const handlers  = require('./handlers')
const port = 3000;

const server = http.createServer((req, res)=>{
    for(let handle of handlers){
      if(!handle(req, res)){
        break;
      }
    }
  });
  
  server.listen(port, console.log(`server is running on port ${port}`))


// http.createServer((req, res) =>{
//     res.writeHead(200, {
//         'Content-Type' : 'text/plain'
//     });

//     res.write('Hello JS World!');
//     res.end()
// }).listen(3000);