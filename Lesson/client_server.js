//Client and Server 
// Communicate with each other using HTTP , TCP, UDP, Websockets, IP ,SMTP, FTP, SSH, POP3, IMAP, etc
//HTTP is the most common way to communicate between client and server
//HTTP is a protocol that allows the fetching of resources, such as HTML documents.
//  It is the foundation of any data exchange on the Web and it is a client-server protocol, 
// which means requests are initiated by the recipient, usually the Web browser.

let http = require('http');
let port = 3000;

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hello World</h1>');
}  );

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
