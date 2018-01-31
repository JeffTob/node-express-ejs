var express = require('express');

var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    var data = [
        { name: 'HTML string concatenation without the messiness', drunkness: 3 },
        { name: 'Easily load templates from separate files', drunkness: 5 },
        { name: 'Intelligent error handling with line numbers', drunkness: 10 }
    ];
    var message = "EJS combines data and a template to produce HTML";

    res.render('index', {
        json_object: data,
        message: message
    });
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});