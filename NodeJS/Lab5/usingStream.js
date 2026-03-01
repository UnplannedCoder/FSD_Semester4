const fs = require('fs');
function readFileStream(filename){
    const stream = fs.createReadStream(filename,'utf-8');
    stream.on('data',(chunk) => {
        console.log(`Data from ${filename}:`);
        console.log(chunk);
    });

    stream.on('end',() => {
        console.log(`${filename} reading completed`);
    });
    
    stream.on('error',(err) => {
        console.error(`Error reading ${filename}:`, err);
    });
}
readFileStream('file1.txt');
readFileStream('file2.txt');
readFileStream('file3.txt');