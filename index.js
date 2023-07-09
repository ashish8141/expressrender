const mailWizz = require("node-mailwizz");
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const PORT = process.env.PORT || 3030;

const config = {
    publicKey: "publicKey",
    secret: "secretKey",
    baseUrl: "yourMailwizzApiUrl"
};

const subscribers = new mailWizz.ListSubscribers(config);

app.post("/", (req,rest) => {
    var userInfo = {
    EMAIL: req.body.email_1,
    FNAME: req.body.name_1
};
subscribers.create("gp650yk29ha5f", userInfo)
    .then(function(result) {
        console.log("Added it");
    })
    .catch(function(err) {
        console.log("Error");
    });
    rest.sendStatus(200);
})

app.listen(PORT, () => console.log("Server listening on port 3000!"));
