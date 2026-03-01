// https module to create server
// fs module to read the text file
const http = require('http');
const fs = require('fs');

// create HTTP server 
// utf8 used to convert into human readable form 
const server = http.createServer((req, res) => {
    // read the text file
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// start server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});