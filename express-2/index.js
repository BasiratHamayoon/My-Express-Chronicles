const express = require("express");
const path = require('path')
const app = express();
const port = 5000;

const staticPath = path.join(__dirname, 'public')
console.log(path.join(__dirname, 'public'))
app.use(express.static(staticPath));


app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
})