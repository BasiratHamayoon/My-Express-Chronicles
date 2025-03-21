const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 7000;

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/UserData");
        console.log("Mongo Db connected Sucessfully!");
    } catch (error) {
        console.log(`Mongo Db Connection error ${error}`);
    }
};
connectDB();

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model("User", userSchema);


app.set("view engine", "hbs");
app.set("views", "./views")

app.use(bodyParser.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        await newUser.save();
        res.send("User data  Saved Successfully!");
    } catch (error) {
        res.status(500).send("Error Saving Data")
    }
});

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})