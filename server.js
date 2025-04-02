const express = require("express");  // Import Express
const winston = require("winston"); // Import Winston Logger
const app = express();  // Create an Express app
const PORT = 4000;  // Port number

// Winston Logger Configuration
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "server.log" })
    ]
});

// Middleware to Log All Requests
app.use((req, res, next) => {
    logger.info({ method: req.method, url: req.url, timestamp: new Date().toISOString() });
    next();
});

// Addition Route
app.get("/add", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error("Invalid numbers provided for addition");
        return res.status(400).send("Invalid numbers provided.");
    }
    const result = num1 + num2;
    logger.info(`Addition Result: ${result}`);
    res.send(`Result: ${result}`);
});

// Subtraction Route
app.get("/subtract", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error("Invalid numbers provided for subtraction");
        return res.status(400).send("Invalid numbers provided.");
    }
    const result = num1 - num2;
    logger.info(`Subtraction Result: ${result}`);
    res.send(`Result: ${result}`);
});

// Multiplication Route
app.get("/multiply", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error("Invalid numbers provided for multiplication");
        return res.status(400).send("Invalid numbers provided.");
    }
    const result = num1 * num2;
    logger.info(`Multiplication Result: ${result}`);
    res.send(`Result: ${result}`);
});

// Division Route
app.get("/divide", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error("Invalid numbers provided for division");
        return res.status(400).send("Invalid numbers provided.");
    }
    if (num2 === 0) {
        logger.error("Attempt to divide by zero");
        return res.status(400).send("Cannot divide by zero.");
    }
    const result = num1 / num2;
    logger.info(`Division Result: ${result}`);
    res.send(`Result: ${result}`);
});

// Exponentiation Route
app.get("/exponentiate", (req, res) => {
    const base = parseFloat(req.query.base);
    const exponent = parseFloat(req.query.exponent);
    if (isNaN(base) || isNaN(exponent)) {
        logger.error("Invalid numbers provided for exponentiation");
        return res.status(400).send("Invalid numbers provided.");
    }
    const result = Math.pow(base, exponent);
    logger.info(`Exponentiation Result: ${result}`);
    res.send(`Result: ${result}`);
});

// Square Root Route
app.get("/sqrt", (req, res) => {
    const num = parseFloat(req.query.num);
    if (isNaN(num)) {
        logger.error("Invalid number provided for square root");
        return res.status(400).send("Invalid number provided.");
    }
    if (num < 0) {
        logger.error("Attempted to calculate square root of a negative number");
        return res.status(400).send("Cannot calculate square root of a negative number.");
    }
    const result = Math.sqrt(num);
    logger.info(`Square Root Result: ${result}`);
    res.send(`Result: ${result}`);
});

// Modulo Route
app.get("/modulo", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error("Invalid numbers provided for modulo operation");
        return res.status(400).send("Invalid numbers provided.");
    }
    const result = num1 % num2;
    logger.info(`Modulo Result: ${result}`);
    res.send(`Result: ${result}`);
});

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Arithmetic Server! Use /add, /subtract, /multiply, /divide, /exponentiate, /sqrt, or /modulo.");
});

// Start Server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
    console.log(`Server is running on http://localhost:${PORT}`);
});
