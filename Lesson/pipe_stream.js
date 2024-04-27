// Buffer && Stream && Pipe

// Buffer is temporary storage of data being transferred from one place to another
// Buffer is a global class in Node.js that can be used to read and write binary data
// Buffer => memory chunk of data stored in binary format to Buffer object
// Buffer is used because JS can't handle binary data
// Buffer is used to handle raw binary data


// Stream is a sequence of data elements made available over time 
// Stream is an abstract interface for working with streaming data in Node.js
// Stream is an EventEmitter ,
// Stream socket => all Buffer 

//Writable Stream  => write data to a stream
//Readable Stream => read data from a stream
//Duplex Stream => read and write data to a stream

// Pipe is a method of readable stream that can be used to write data to a destination
// Piping Stream  
//create Readable Stream
//create Writable Stream
//pipe the readable stream to the writable stream

const fs = require('fs');

let data = "As the sun sets on another scorching Yangon day, the hot and bothered descend on the Myanmar city's parks, the coolest place to spend an evening during yet another power blackout.A wave of exceptionally hot weather has blasted Southeast Asia this week, sending the mercury to 45 degrees Celsius (113 degrees Fahrenheit) and prompting thousands of schools to suspend in-person classes.Even before the chaos and conflict unleashed by the military's 2021 coup, Myanmar's creaky and outdated electricity grid struggled to keep fans whirling and air conditioners humming during the hot season.";


// fs.writeFileSync('test.txt',data);
// let myReadStream = fs.createReadStream('test.txt','utf8');
// let myWriteStream = fs.createWriteStream('new.txt');

// myReadStream.on('data',(chunk)=>{
//     // console.log('New chunk received');
//     // myWriteStream.write(chunk);
//     myReadStream.pipe(myWriteStream);//same as above , but is faster than above
// });



let fs =require('fs');

let myReadableStr = fs.createReadStream('test.txt','utf8');
let myWriteableStr = fs.createWriteStream('new.txt');


//Writeable Stream
myReadableStr.on('data',(chunk)=>{
    console.log('New chunk received');
    console.log('=========================');
    // console.log(chunk);

    //Writeable Stream
    myWriteableStr.write(chunk);


});
