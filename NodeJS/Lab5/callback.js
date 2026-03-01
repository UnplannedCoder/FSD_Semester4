const fs = require("fs");

function readFileCallback(filename) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      console.error(`Error reading ${filename}:`, err);
      return;
    }
    console.log(`Data from ${filename}:`);
    console.log(data);
  });
}

readFileCallback("file1.txt");
readFileCallback("file2.txt");
readFileCallback("file3.txt");
