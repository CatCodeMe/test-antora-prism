const http = require('http');
const serveStatic = require('serve-static');

var serve = serveStatic('build/site', { index: ['index.html', 'index.htm'] })

// Create server
var server = http.createServer(function onRequest(req, res) {
        serve(req, res, () => { });
})

// Listen
server.listen(8001, () => {
        console.log("open http://localhost:8001")
});

