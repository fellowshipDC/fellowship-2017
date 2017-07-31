var http = require('http'), // request - response // listen
      fs = require('fs'), // filesystem
       _ = require('lodash');

var array = [1, 2, 3];
console.log(array);

_.fill(array, 'a');
console.log(array);

fs.readFile('./index.html', function (err, html) { // callback - async execution
    if (err) {
            throw err; 
        }       
    http.createServer(function(request, response) { // http response
            console.log("Request received...");  
            response.writeHeader(404, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end();  
        }).listen(5000);
});
