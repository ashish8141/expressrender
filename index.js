const mailWizz = require("node-mailwizz");
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const PORT = process.env.PORT || 3030;

const config = {
    publicKey: "e71d5a78921af0a0e6cf740f17cf23bb10082fab",
    secret: "e71d5a78921af0a0e6cf740f17cf23bb10082fab",
    baseUrl: "https://triviamastermind.net/mw/api/index.php"
};

const subscribers = new mailWizz.ListSubscribers(config);

app.post("/", (req,rest) => {
    console.log(req.body);
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

app.get("/",(req,res)=>{
    res.send("Server is working. Thanks for connecting.")
})

app.listen(PORT, () => console.log("Server listening on port 3000!"));
