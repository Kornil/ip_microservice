var express = require('express');
var app = express();
var result = {};

app.get('/', function (req, res) {
    result.ipaddress = req.headers['x-forwarded-for'];
    var lang = req.headers['accept-language'].split(",");
    result.language = lang[0];
    var start = req.headers['user-agent'].indexOf("("),
    end = req.headers['user-agent'].indexOf(")");
    result.software = req.headers['user-agent'].substring(start+1,end);
    res.send(result);
}).listen(8080);