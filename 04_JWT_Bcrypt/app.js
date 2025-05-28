const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = []; // In-memory user store

// Register route
app.post("/register", async (req , res) => {
    const { username , password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    users.push({ username, password: hashPassword });

    const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });

    res.json({
        message: "User registered successfully",
        username,
        token
    });
});

// Login route
app.post("/login", async (req , res) => {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });

    res.json({
        message: "User logged in successfully",
        username,
        token
    });
});

app.post("/logout", (req , res) => {
    res.json({ message: "User logged out successfully" });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
