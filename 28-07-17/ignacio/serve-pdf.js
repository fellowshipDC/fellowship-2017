var http = require('http'), 
      fs = require('fs');
     fs.readFile('./javascript.pdf', function(err.pdf) {
         console.log(pdf);
         http.createserver(function(request, response){
                     console.log("Request received...");
            response.writeHead(200,{"Content-Type":"application/pdf"});
            response.write(pdf);
            response.end();
        }).listen(8000);
         }
     })