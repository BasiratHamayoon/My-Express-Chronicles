const express = require("express");
const app = express();
port = 5000;

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})