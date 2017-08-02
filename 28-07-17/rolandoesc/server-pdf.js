
    var  fs = require('fs'),
         http = require('http'); //declaring variables using protocols
    fs.readFile('./97 Things Every Programmer Should Know.pdf',function(err,pdf){ // reading pdf with a callback function
        console.log(pdf); //show on the terminal our pdf
        http.createServer(function(request,response){ //creating a server
            console.log("Request received...");
            response.writeHead(200,{"Content-Type":"application/pdf"}); //pdf file
            response.write(pdf); //show pdf
            response.end();
        }).listen(8000); //accepting requests
    });
