const express = require('express');
const router = express.Router();
const User = require("../../models/User");

router.post('/register', async (req, res) => {
    try {
        // Get user input from the request body
        const {fullName, username, email, password, dateOfBirth} = req.body;

        // // Check if the user already exists
        if (await User.checkUserExists(email, username)) {
            return res.status(400).json({message: 'User with this email or username already exists'});
        }

        // Hash the password before saving it
        const hashedPassword = await User.hashPassword(password);

        // Create a new user in the database
        await User.createUser({
            fullName,
            username,
            email,
            password: hashedPassword,
            dateOfBirth,
        });

        // TODO: generate an access token and send it in the response
        // use a library like jsonwebtoken

        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({message: 'Registration failed'});
    }
});

module.exports = router;
