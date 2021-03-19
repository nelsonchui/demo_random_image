var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {

    // generate a random number (0-1)   
    var i = Math.floor(Math.random() * (5))
        console.log("random i = " + i);
    var fn = "";

    switch (i) {
        case 0:
            fn = __dirname + "/" + "image/sun.jpg";
            console.log("sun.jpg");
            break;
        case 1:
            fn = __dirname + "/" + "image/moon.jpg";
            console.log("moon.jpg");
            break;
        case 2:
            fn = __dirname + "/" + "image/star.jpg";
            console.log("star.jpg");
            break;
        case 3:
            fn = __dirname + "/" + "image/mars.jpg";
            console.log("mars.jpg");
            break;  
        case 4:
            fn = __dirname + "/" + "image/jupiter.jpg";
            console.log("jupiter.jpg");
            break;   
    }
    res.sendFile(fn);

})


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Demo random image app listening at http://%s:%s", host, port)
})