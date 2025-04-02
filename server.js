const express = require("express");  // Import Express
const app = express();  // Create an Express app

const PORT = 4000;  // Change the port to 4000

// Addition Route
app.get("/add", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send("Invalid numbers provided.");
    }
    res.send(`Result: ${num1 + num2}`);
});

// Subtraction Route
app.get("/subtract", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send("Invalid numbers provided.");
    }
    res.send(`Result: ${num1 - num2}`);
});

// Multiplication Route
app.get("/multiply", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send("Invalid numbers provided.");
    }
    res.send(`Result: ${num1 * num2}`);
});

// Division Route
app.get("/divide", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send("Invalid numbers provided.");
    }
    if (num2 === 0) {
        return res.status(400).send("Cannot divide by zero.");
    }
    res.send(`Result: ${num1 / num2}`);
});

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Arithmetic Server! Use /add, /subtract, /multiply, or /divide.");
});

// Start Server on Port 4000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
