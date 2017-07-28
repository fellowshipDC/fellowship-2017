var  fs = require('fs'),
       http = require('http');
// Declaramos las variables para el filesystem y el protocolo de request-response
  fs.readFile('./Diplomaciapetrolera.pdf',function(err,pdf){
      console.log(pdf);
//indica leer el archivo y el callback
      http.createServer(function(request,response){
                  console.log("Request received...");
                  response.writeHead(200,{"Content-Type":"application/pdf"});
                  response.write(pdf);
                  response.end();
              }).listen(8000);
          });
//indica crear el servidor, solicita una respuesta de  http.
