console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

//module.exports.log = log;
// module.exports.endPoint = url;
module.exports = log;   // only one function, no need to specify the method
