 var fs = require ('fs'),
     http = require ('http');
fs.readFile('./Vicios_Ordinarios_Shklar_.pdf',function (err,pdf){
    console.log(pdf);
    http.createServer(function(request,response){
        console.log("Request received...")
        response.writeHead(200,{"Content-Type":"application/pdf"});
        response.write(pdf);
        response.end();   
        
    }).listen(8000);
});
   
   
   
   
   
   
   
   
