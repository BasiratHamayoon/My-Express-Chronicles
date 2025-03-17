const express = require("express");
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send("Welcome to the Home Page");
});

app.get('/about', (req, res) => {
    res.send("Welcome to about us page");
});

app.get('/Contact', (req, res)=> {
    res.send("Welcome to contact us page");
});

app.listen(port, ()=> {
    console.log(`Your Server is running on Port ${port}`);
})