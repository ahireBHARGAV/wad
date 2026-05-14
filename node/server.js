const http = require('http');

const fs = require('fs');

const server = http.createServer(function(req, res){

    // CSS FILE
    if(req.url == '/style.css'){

        fs.readFile('style.css', function(err, data){

            res.writeHead(200, {
                'Content-Type': 'text/css'
            });

            res.write(data);

            res.end();

        });

    }

    // HTML FILE
    else{

        fs.readFile('index.html', function(err, data){

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(data);

            res.end();

        });

    }

});

server.listen(3000);

console.log("Server running on port 3000");