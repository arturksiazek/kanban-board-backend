const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const di = require('./di');
app.set('di', di);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static(__dirname + '/public'));

require('./plugins/cors')(app);

const router = require('./routes')(di);

app.use(router);

module.exports = app;
