
const {StringDecoder} = require('string_decoder');
const url = require('url')
const routes = require('../routes');
const {notFoundHandler} = require('../Handlers//routesHandler/notFoundHandler');


// module scaffolding


const handler = {};

handler.handleReqRes=(request,response)=>{


    //request handeling

    //get the url and parse it
    const parseUrl = url.parse(request.url,true);
   
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = request.method.toLowerCase();
    const queryStringObject = parseUrl.query;

    const decoder = new StringDecoder('utf-8');

    let realData = '';

    const chosenHandler = routes

    request.on('data',(buffer)=>{
        realData += decoder.write(buffer);
    });

    request.on('end',()=>{
        realData += decoder.end();
        console.log(realData);
        response.end('Hello Bitches');
    })

    


    
}


module.exports = handler;