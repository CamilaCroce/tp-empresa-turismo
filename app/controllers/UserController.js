const User = require('../models/User');

exports.userRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const exist = await User.findOne({ email });
        if (exist) return res.status(400).json({ message: "The email is already registered" });
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", userId: newUser._id });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

exports.getPerfil = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error obtaining profile", error });
    }
};