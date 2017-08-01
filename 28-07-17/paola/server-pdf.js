var http = require ("http"), //petición http
    fs = require ("fs"); //petición a la la libreria filesystem
    


fs.readFile('./sabc_21.pdf', function (err, pdf) {  //lee el archivo PDF y función callback
	console.log(pdf); //cuando recibe la petición imprime el archivo
	http.createServer(function(request,response){    //crea el server y función callback con dos parametros petición y respuesta
            console.log("Request received...");  //cuando reciba la respuesta imprime
            response.writeHead(200,{"Content-Type":"application/pdf"}); //responede con el código de estado HTTP y parametro PDF
            response.write(pdf);   //Despues responde escribiendo el PDF
            response.end(); //Respuesta de que termino
        }).listen(5000);  //indica que esta esperando y número de puerto
});