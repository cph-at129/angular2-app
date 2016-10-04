var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use('/app', express.static(__dirname + '/app'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

http.createServer(function (req, res) {
	console.log('Server running at http://10.129.4.108:8080/');
}).listen(8080, '10.129.4.108');