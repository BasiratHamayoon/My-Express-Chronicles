const User = require('../models/User.js');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        return res.status(400).json({ message: "UserName, email and Password are required fields." });
    }
    try {
        const isUserExist = await User.findOne({ $or: [{ email }, { userName }] });
        if (isUserExist) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        });
        await newUser.save();

        res.status(201).json({ message: "User Registered Successfully!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error!" });
    }
};

module.exports = { registerUser };
