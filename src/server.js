var http = require('http');
var router = require('./router')

var server = http.createServer(router.router);

server.listen(3500, () => console.log('server is listening on 3500'))