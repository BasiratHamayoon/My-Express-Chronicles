const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.get("/", (req, res)=> {
    res.render("index");
})

app.get('/greet', (req, res)=>{
    const userName = req.query.userName;
    res.render("greeting", {name: userName});
})

port = 8000;
app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})