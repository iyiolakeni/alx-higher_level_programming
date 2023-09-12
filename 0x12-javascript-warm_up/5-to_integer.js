#!/usr/bin/node

const arg = process.argv[2];
const num = parseInt(arg);

const message = isNaN(num) ? 'Not a number' : 'My number: ' + num;
console.log(message);
