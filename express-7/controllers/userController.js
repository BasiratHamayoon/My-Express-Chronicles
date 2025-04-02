const User = require('../models/users.js');

const getAllUsers = (req, res) => {
    const users = User.getAllUsers();
    res.json(users);
};

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10); // Convert the id to a number
    const user = User.getUserById(userId);
    
    if (user) {
        return res.json(user);
    } else {
        res.status(400).send("User not Found!");
    }
};

module.exports = { getAllUsers, getUserById };
