

const http = require('http');
const fs = require('fs');

const Server = http.createServer(function (request,response) {


    if(request.url == "/")
    {
        let data = fs.readFileSync('home.html','utf8');
        response.end(data);
    }
    else if(request.url == "/about")
    {
        let data = fs.readFileSync('about.html','utf8');
        response.end(data);
    }
    else if(request.url == "/contact")
    {
        let data = fs.readFileSync('contact.html','utf8');
        response.end(data);
    }
    else if(request.url == "/terms")
    {
        let data = fs.readFileSync('terms.html','utf8');
        response.end(data);
    }

    
})

Server.listen(3000)
console.log('Listining to the serve at 3000');