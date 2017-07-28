var http = require('http');
var fs = require('fs');

	fs.readFile('Art_CP.pdf', function(err, pdf) {
	http.createServer(function(req, res){
		console.log("received");
    res.writeHead(200, {'Content-Type': 'text/pdf'});
    res.write(pdf);
    res.end();
}).listen(8000);
	 });