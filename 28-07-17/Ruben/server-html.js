var http = require('http'), // Incluye el protocolo de comunicación HTTP para enviar las peticiones y respuestas entre cliente y servidor
      fs = require('fs'), // Establece una variable para el filesystem 
       _ = require('lodash'); // Requiere una biblioteca para correr el script

fs.readFile('./index.html', function (err, html) { // Funcion de ejecución asincrona que manda a llamar el archivo indicado
                                                   // desde el sistema de archivos 
    if (err) {
            throw err;                             // En este caso la función envía un mensaje de error o ejecuta las instrucciones 
                                                   // dependiendo de lo que encuentre el servidor 
        }       
    http.createServer(function(request, response) { // Esta parte maneja las respuestas que se darán 
                                                    //a las peticiones de los clientes por parte del servidor
            console.log("Request received...");     // Indica si la petición fue recibida por parte del servidor
            response.writeHeader(200, {"Content-Type": "text/html"});  // Envía un mensaje de HTTP 
                                                                       // de acuerdo a si el servidor encontró el contenido o no
            response.write(html); //Ejecuta el documento html que se ha mandado a llamar  
            response.end();  //Indica que la pretición ha sido llevada a cabo.
        }).listen(5000); //Esta parte mantiene al servidor en estado latente, en espera de que haya una nueva petición
});
