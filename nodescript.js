const fs = require('node:fs')


//fs.copyFile("hey.txt","./copy/copy.txt",function(err){
   // if(err) console.log(err);
    //else console.log("work done");
//})


//  Reading the content of the file fs.readFile("hey.txt",'utf8',function(err,data){
    //if(err) console.log(err.message);
    //else console.log(data);
//})

fs.unlink("hey.txt",function(err){
    if(err) console.log(err);
    else console.log("work done");
}) // removing a file operation.



// Creating an HTTP server:

const http = require('http');

 const server = http.createServer(function(request,response){
    response.end("This is javascript");
 })

 server.listen(4000);












