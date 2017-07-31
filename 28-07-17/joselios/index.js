 
    var  fs = require('fs'), //incluye un modulo que nos permite trabajar en nuestra computadora
         http = require('http');//incluye al modulo que nos permite usar mandar datos a traves de HTTP
    fs.readFile('./mimimi.pdf',function(err,pdf){ //Lee el archivo mimimi.pdf y ejecuta callback
        console.log(pdf); //muestra el pdf 
        http.createServer(function(request,response){//crea un servidor http
            console.log("Request received...");//muestra en la consola el mensaje de peticion recibida
            response.writeHead(200,{"Content-Type":"application/pdf"});//si todo esta bien (código 200) muestra el contenido
            response.write(pdf);//manda el archivo al cliente
            response.end();//El servidor detiene la página.
        }).listen(8000); //Le indica al servidor que este atento al puerto 8000
    });


