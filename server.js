var serverHelper = (function () {
    var http = require("http");
    var url = require("url");

    return {
        start: function() {
            http.createServer(function (request, response) {
                response.writeHead(200, { "Content-Type": "text/plain" });
                response.write(url.parse(request.url).pathname);
                response.end();
            }).listen(8888);
        }
    }
})();

exports.serverHelper = serverHelper;