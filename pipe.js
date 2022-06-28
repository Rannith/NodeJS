let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
    console.log("req in :", req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    let myReadStream = fs.createReadStream('./Text/readMe.txt','utf-8');
    myReadStream.pipe(res)
    // res.end('res')
});

server.listen(8080);
console.log("Server listening to port 8080");