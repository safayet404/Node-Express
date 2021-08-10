


// dependencies declear


const http = require('http');
const url = require('url');

const fs = require('fs');

const Server = http.createServer(function(request,response){


   fs.unlink('index.html',function(error) {
    if(error)
    {
        response.writeHead(200,{'Content-type':'text/html'})
        response.write('Deletye Failed');
        response.end();

    }
    else
    {
        response.writeHead(200,{'Content-type':'text/html'})
        response.write('Delete Success');
        response.end();
    }
   })

        
        

   
})




Server.listen(3000);

console.log('listing server at 3000');

