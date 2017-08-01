var fs = require('fs'), //import filesystem library
    http = require('http'); // import http library request-response

fs.readFile('./tree.pdf', function (err,pdf){//read file and do callback function
    if (err) {
        throw err;//in case of error
    }
    http.createServer(function(request,response){//create server
        console.log("doing something")
        response.writeHead(200,{"Content-Type":"application/pdf"});
        response.write(pdf);
        response.end();
    }).listen(7000)
});