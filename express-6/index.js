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

//Middleware to varify jwt token

const varifyUser = (req, res, next) => {
    const token  = req.header("Authorization")?.replace("Bearer ", "");
    if(!token) {
        return res.status(401).json({
            message: "Access Denied! No Token Provided!"
        });
    }

    try {
        const decoded = jwt.verify(token, "qwhudey3y7846838492838yeudhjdhryedwoi" );
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(400).json({
            message: "Invailid Token!"
        });
    }
};

//Protected Route

app.get("/profile", varifyUser, (req, res) => {
    res.json({message: "Protected Route Accessed !", user: req.user});
});


app.listen(port , () => {
    console.log(`http://localhost:${port}`);
})