let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res)=>{

    if(req.url === '/'){
        let myReadableStr = fs.createReadStream('blog/index.html','utf8');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadableStr.pipe(res);
    }else if(req.url === '/about'){
        let myReadableStr = fs.createReadStream('blog/about.html','utf8');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadableStr.pipe(res);
    }
    else if(req.url === '/result'){
        let myReadableStr = fs.createReadStream('blog/result.html','utf8');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadableStr.pipe(res);
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('<h1>404 Page Not Found</h1>');
    }

   

} );

server.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`);
});