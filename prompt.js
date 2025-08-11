const prompt = require('prompt-sync')({ sigint: true });
const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);
