const mailWizz = require("node-mailwizz");
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
    res.send('Success')
});

app.post("/", (req,rest) => {
    console.log('Got body:', req.body);
    console.log('Gots body:', rest.body);
    rest.sendStatus(200);
})

app.listen(PORT, () => console.log("Server listening on port 3000!"));
