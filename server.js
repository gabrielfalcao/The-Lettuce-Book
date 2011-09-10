(function(){
    var express = require('express'),
    path = require('path');

    var app = module.exports = express.createServer();
    var BUILD_PATH = [__dirname, 'build'].join('/');

    app.configure(function(){
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(function(request, response, next){
            var fullpath = BUILD_PATH + request.url;
            path.exists(fullpath, function(exists) {
                if (exists) {
                    console.log("Serving: " + request.url);
                }
            });
            return next();
        });
        app.use(express.static(BUILD_PATH));
        app.use(express.static(__dirname));

    });
    console.log("Serving at: http://localhost/book.pdf");
    app.listen(80);
})();
