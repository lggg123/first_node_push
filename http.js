const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    // console.log listens to the event occuring as there are many. 
    if (req.url === '/') {
        // res.writeHead(200, { 'Content-Type':'text/html' });

        // will only run after we have successfully read the file 
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end(); 
        })

        // res.end();
    }

    if (req.url === '/user') {
        req.write('Welcome user jhonson');
        res.end();
    }
    
});

server.listen(3000, () => console.log('Server is up and running'));

