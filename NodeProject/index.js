

//dependencies 


const http = require('http');
const {handleReqRes} = require('../NodeProject/helpers/handleReqRes');

// config 

const app = {};

app.config = {
    port : 3000,
};


// create server

app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);

    server.listen(app.config.port ,()=>{
        console.log(`listining port in ${app.config.port}`)
    });
};


app.handleReqRes = handleReqRes;

// Start the server
app.createServer();