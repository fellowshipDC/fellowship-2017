 var  fs = require('fs'),
         http = require('http');
    fs.readFile('./1379968983.pdf',function(err,pdf){
        console.log(pdf); 
        http.createServer(function(request,response){
            console.log("Request received...");
            response.writeHead(200,{"Content-Type":"application/pdf"});
            response.write(pdf);
            response.end();
        }).listen(8000);
    });

