var handlers = require('./handler')

function router(request, response) {
    console.log(request.url, request.method)
    if (request.url === '/') {
        handlers.indexHandler(request, response)
    }
    if(request.url === '/style.css'){
        console.log("requested style")
        handlers.fileHandler(request,response)
    }
}



module.exports = {
    router: router
}