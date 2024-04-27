let http = require('http');
let fs = require('fs');

let myReadableStr = fs.createReadStream('index.html','utf8');


let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    myReadableStr.pipe(res);
} );

server.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`);
});