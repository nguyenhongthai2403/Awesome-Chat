import express from "express";
let app = express();

let hostname = "localhost";
let port = "2403";

app.get("/", (req, res )=>{
    res.send("<h1>Hello world</h1>");
});

app.listen(port, hostname, () => {
    console.log(`Listening on ${hostname}: ${port}`);
});
