var express = require("express");
var app = express();

var hostname = "localhost";
var port = "2403";

app.get("/", (req, res )=>{
    res.send("<h1>Hello world</h1>");
});

app.listen(port, hostname, () => {
    console.log(`Listening ass asa on ${hostname}: ${port}`);
});
