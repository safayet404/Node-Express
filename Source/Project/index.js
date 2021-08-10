/*

* Titile : Uptime Monitoring Application

* Description : A RESTFul API to monitor up or down time of user defined link
* Author : Safayet Hossain 

* Date : 02/08/2021

*/



// dependencies 

const http = require('http');

// app object - module Scafolding

const app = {};

// config 

app.config = {
    port : 3000,
};


// crate server

app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`listning port in ${app.config.port}`)
    })
}

// handle request response


app.handleReqRes = (request,response) => {

   response.end('Hello World');

}