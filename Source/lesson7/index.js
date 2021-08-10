const http = require('http');

const fs = require('fs');


const server = http.createServer((request,response)=>{
    const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
    myReadStream.pipe(response);
})


server.listen(3000);
console.log('listing server')