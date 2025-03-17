const express = require("express");
const app = express();
const port = 2000;
app.get('/htmlData', (req, res) => {
    res.write('<h1>Sending Data through HtMl in Express js</h1>');
    res.send();
});

app.get('/', (req, res) => {
    res.json({
        id: 1,
        name: "Joye",
        age: 21
    });
})

app.listen(port, () => {
    console.log("Your port is running on 2000");
})