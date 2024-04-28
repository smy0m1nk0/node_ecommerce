

let dir  = __dirname;
let file = __filename;
let data = file.split('\\');

// data[data.length - 1];

// setTimeout
// setInterval
// clearInterval

//work only one time
setTimeout(
    function(){
        console.log('Wait for 3 seconds');
    }, 3000
);
 //Wrok Always interval
 let i=0;
setInterval(
    function(){
        i++;
        if(i==5){
            clearInterval(this);
        }
        console.log(`Wait for 3 seconds work ${i} times`);
    }, 3000
);

// Function Expression to load the app

var app = function() {
    console.log('App loaded');
}

func(app)

function func(val){
    val();
}

//Module Export Lesson , Mutiple Function Export

const {help,goofy} = require('./helper');

help("MS");
goofy("MS");

// Event Emitter 
// Event Emitter is a class in Node.js that helps us to create our own events and handle them.
//wait event and call callback function ande produce with emit

const event = require('events');

const myEmitter = new event.EventEmitter();


myEmitter.on('startW',()=>{
    console.log('I am start working');
});

// let i =0;
setInterval(()=>{
    i++;
    if((i%3) == 0)
        myEmitter.emit('startW');
    else
        console.log('I am waiting to emit .......');
},2000);

//Emitter with Argument


myEmitter.on('donow',(val)=>{
    console.log('I am start working  '+ val);
});

// let i =0;
setInterval(()=>{
    i++;
    if((i%3) == 0)
        myEmitter.emit('donow','Micro Ray Solution');
    else
        console.log('I am waiting to emit .......');
},2000);


//for loop ,for in loop, for of loop, for each loop

let students = ['MS','Raj','Ravi','Rajesh','Rajeev'];

for(let i=0;i<students.length;i++){
    console.log(students[i]);
}
console.log("===========FOR OF LOOP===========");

for(let student of students){
    console.log(student);
}

console.log("===========FOR IN LOOP===========");

for(let student in students){
    console.log(student);
}

console.log("===========FOR EACH LOOP===========");
students.forEach((student)=>{
    console.log(student);
});