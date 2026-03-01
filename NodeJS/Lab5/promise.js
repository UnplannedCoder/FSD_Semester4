const fs = require('fs');

function readFilePromise(filename){
    return new Promise((resolve,reject) => {
        fs.readFile(filename,'utf-8',(err,data) => {
            if(err){
                reject(`Error reading file ${filename}`);
            } else{
                resolve(data);
            }
        });
    });
}

Promise.all([
    readFilePromise('file1.txt'),

    readFilePromise('file2.txt'),

    readFilePromise('file3.txt'),
])

.then ((data) => {
    console.log("Files processed using Promises");
    console.log(data);
})

.catch((err) => {
    console.error(err);
});