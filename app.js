const express = require('express');
const bodyParser = require('body-parser');
const request = require('superagent');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// //middleware, static files HTML where form is stored
app.use(express.static(__dirname + "/"));

//connecting cloud i9 host
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The Server Has Started!");
});

app.post('/', function(req, res) {
    addEmailToMailchimp(req.body.email);
    res.end('SUCCESS!');
});

function addEmailToMailchimp(email) {
    var request = require("request");

    var options = {
        method: 'POST',
        url: 'https://us19.api.mailchimp.com/3.0/lists/6f0e189b4b/members',
        headers: {
            'postman-token': 'f9a6ac53-8c96-9484-6c47-7ecf4aed7845',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: 'Basic YW55c3RyaW5nOjIzMzdmNzhmYWI2ZDViMWRkNGRhYzcyN2VkYTAwZmNiLXVzMTk='
        },
        body: { email_address: email, status: 'subscribed' },
        json: true
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });

}
