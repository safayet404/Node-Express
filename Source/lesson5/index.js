

const http = require('http');

const server  = http.createServer((request,response)=>{
    if(request.url === '/')
    {
        response.write('Hello Programmers');
        response.write('How are you??');
        response.end();
    }

    else if(request.url === '/about')
    {
        response.write('This is about page');
     
        response.end();
    }
    else
    {
        response.write('Not found');
        
        response.end();
    }

});



server.listen(3000)

console.log('listening on port 3000');