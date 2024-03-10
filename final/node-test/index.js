// const y=10;
// const x=5;
// console.log(x+y);

// const fs = require('fs');

// // Specify the file path
// const filePath = 'data.json';

// // Use fs.readFile to read the file asynchronously
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
  
//   // Data contains the contents of the file
//   console.log('File contents:', JSON.parse(data));
// });

const fs = require('fs');

// Specify the file path
const filePath = 'my.txt';

// Content to write to the file
const content = 'Hello, My name is Han htun Aung and live in Mandalay!';

// Use fs.writeFile to write to the file asynchronously
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }

  console.log('File has been written successfully!');
});

