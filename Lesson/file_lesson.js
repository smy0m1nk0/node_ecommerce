
let fs = require('fs');

let data = "As the sun sets on another scorching Yangon day, the hot and bothered descend on the Myanmar city's parks, the coolest place to spend an evening during yet another power blackout.A wave of exceptionally hot weather has blasted Southeast Asia this week, sending the mercury to 45 degrees Celsius (113 degrees Fahrenheit) and prompting thousands of schools to suspend in-person classes.Even before the chaos and conflict unleashed by the military's 2021 coup, Myanmar's creaky and outdated electricity grid struggled to keep fans whirling and air conditioners humming during the hot season.";


fs.writeFileSync('test.txt',data);

let readFile = fs.readFileSync('test.txt','utf-8');
console.log(readFile);

fs.appendFileSync('test.txt','\n'+data);


// File Handeling

fs.writeFile('test.txt',data,(err)=>{
    if(err) throw err;
    console.log('File Writed');
});

fs.readFile('test.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

fs.appendFile('test.txt','\n =============>Micro Ray Solution <============',(err)=>{
    if(err) throw err;
    console.log('File Appended');
});


// File Delete 
fs.unlink('test.txt',(err)=>{
    if(err) throw err;
    console.log('File Deleted');
});

fs.mkdir('test',(err)=>{
    if(err) throw err;
    console.log('Directory Created');
});

fs.rmdir('test',(err)=>{
    if(err) throw err;
    console.log('Directory Deleted');
});
