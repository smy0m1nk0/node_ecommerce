
let http = require('http');

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    let obj = {
        name: 'Micro Ray Solution',
        age: 25,
        city: 'Kolkata',
        family: {
            father: 'Mr. X',
            mother: 'Mrs. Y'
        }
    };

    res.end(JSON.stringify(obj));
} );

server.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`);
});