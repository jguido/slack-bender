const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('./config');

router.get('', function(req, res) {
    if (!req.query.code) {
        res.status(500);
        res.send({"Error": "Looks like we're not getting code."});
        console.log("Looks like we're not getting code.");
    } else {
        request({
            url: 'https://slack.com/api/oauth.access',
            qs: {code: req.query.code, client_id: config.slackClient.id, client_secret: config.slackClient.secret},
            method: 'GET',

        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                res.json(body);
            }
        })
    }
});

module.exports = router;
