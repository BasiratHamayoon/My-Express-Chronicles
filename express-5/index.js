const express = require("express");
const app = express();
port = 5000;

//Middleware to parse JSON request body
app.use(express.json());

let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@gmail.com"
    },
    {
        id: 2,
        name: "Jhon",
        email: "jhon@gmail.com"
    }
];

//Get Method
app.get("/users", (req, res)=> {
    res.json(users);
});

//Post Method
app.post("/users", (req, res) => {
    const newUser = { name: req.body.name, email: req.body.email };
    //Working like a memeoery to store new user at the array
    users.push(newUser);
    res.status(201).json(newUser);
});

//Put Method
app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if(!user) {
        return res.status(404).json({message: "User Not Found"});
    }
    user.name = req.body.name;
    res.json(user);
})

//Delete Method
app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter((u) => u.id !== userId);
    res.json({message: "User Deleted Successfully"});
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})