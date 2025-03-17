const express = require("express");
const app = express();
const port = 2000;
app.get('/htmlData', (req, res) => {
    res.write('<h1>Sending Data through HtMl in Express js</h1>');
    res.send();
})

app.listen(port, () => {
    console.log("Your port is running on 2000");
})