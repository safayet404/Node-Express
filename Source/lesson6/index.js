

/*const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

ourReadStream.on(`data`,(chunk)=>{
    console.log(chunk.toString())
});

*/

const http = require('http');

const server  = http.createServer((request,response)=>{
    if(request.url === '/')
    {
        response.write('<html><head><title><body></body></title></head></html>');
        response.write('<form method="post" action="/process"><input name="message"></input></form>');
        response.end();
    }

    else if(request.url === '/process' && request.method === 'POST')
    {

        const body = [];

        request.on('data',(chunk)=>{
            body.push(chunk);

            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
        })
    

        request.on('end',()=>{
            console.log("Stream Finished");
            //const parseBody = Buffer.concat(body).toString();
            //console.log(parseBody);
        })
        response.write('ThankYou for submitted');
     
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


