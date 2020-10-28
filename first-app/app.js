/*
const logger = require('./logger');

//console.log(logger);
//logger.log('hello world');
logger('sdfkjlds'); // in case only one function


const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);
console.log(pathObj.dir);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);

// Tempate string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
*/

const fs = require('fs');

/*
const files = fs.readdirSync('./');
console.log(files);
*/

fs.readdir('./', function(err, files) {
    if (err) console.log('error', err);
    else console.log('reault', files);
});
