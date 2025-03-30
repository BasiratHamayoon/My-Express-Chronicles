const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 2000;

app.use(express.json());

const users =[
{ id: 1, name: "Bob", email: "bob@gmail.com" },
{ id: 2, name: "Jhon", email: "jhon@gmail.com" }
];
app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/login", (req, res) => {
    const {email} = req.body;

    const user = users.find((u)=> u.email ===email);
    if(!user) {
        return res.status(400).json({message: "User Not Found!"});
    }

    const token = jwt.sign({id: user.id, name: user.name, email: user.email},"qwhudey3y7846838492838yeudhjdhryedwoi" , {expiresIn: "1h"});
    res.json({message: "Login Successfull!", token});
});



app.listen(port , () => {
    console.log(`http://localhost:${port}`);
})