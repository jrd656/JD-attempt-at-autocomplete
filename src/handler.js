var fs = require('fs')

const indexHandler = function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" })
    fs.readFile(__dirname + '/../public/index.html', function (error, file){
        if (error) {
            console.log(error);
            return;
        }
        response.end(file)
    })
}

const fileHandler = function(request,response){
    response.writeHead(200, {"Content-Type": "text/css"})
    fs.readFile(__dirname + '/../public/style.css', function(err,file){
        if(err){
            console.log(err)
            return
        }
        response.end(file)
    })
}

module.exports = {
    indexHandler:indexHandler,
    fileHandler:fileHandler
}