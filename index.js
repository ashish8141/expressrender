const mailWizz = require("node-mailwizz");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
    res.send('Success')
});

app.listen(PORT, () => console.log("Server listening on port 3000!"));