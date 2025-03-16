const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Welcome to My First Express Practice!");
});

app.listen(4000, () => {
    console.log("Your server is running on port 4000");
});


//Making Directory with the help of commands
//=>mkdir directoryName

//Go inside Directory
// =>cd directoryName

//Create a file inside directory
// => type null > fileName

//Delete file
// => del fileName
