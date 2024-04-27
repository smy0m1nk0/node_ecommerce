//Piping Stream Down to User
let http = require('http');
let fs = require('fs');

let myReadableStr = fs.createReadStream('./Lesson/test.txt','utf8');


let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
  myReadableStr.pipe(res);
});


server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});
