const express = require('express');
const app = express();
const port = 6000;
app.use((req, res, next) =>{
    console.log("Middleware 1");
    next();
})
app.use("/", (req, res) => {
    res.send("Welcome to the Server!");
})

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})