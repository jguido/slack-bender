const express = require('express');
const request = require('request');
const config = require('./config');

const oauth = require('./auth');
const bodyParser = require('body-parser');
const slashCommandFactory = require('./Command/slashCommandFactory');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(config.httpPort, function () {
    console.log("App listening on port " + config.httpPort);
});

app.use('/oauth', oauth);

app.post('/command', function(req, res) {
    let commandFactory = slashCommandFactory(req.body);
    commandFactory
        .then((result) => {
            return res.json(result)
        })
        .catch(e => console.error(e))
});