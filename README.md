# sit737-2025-prac4p

Arithmetic Microservice
A simple arithmetic microservice built with Node.js and Express that supports various basic and advanced arithmetic operations, such as addition, subtraction, multiplication, division, exponentiation, square root, and modulo operations

Features
Addition: Adds two numbers.

Subtraction: Subtracts one number from another.

Multiplication: Multiplies two numbers.

Division: Divides one number by another (handles division by zero).

Exponentiation: Raises a base to a specified exponent.

Square Root: Computes the square root of a number (handles negative inputs).

Modulo: Calculates the remainder of the division between two numbers.

Addition
GET /add?num1=<number>&num2=<number>
Example: http://localhost:4000/add?num1=5&num2=3

Subtraction
GET /subtract?num1=<number>&num2=<number>
Example: http://localhost:4000/subtract?num1=5&num2=3

Multiplication
GET /multiply?num1=<number>&num2=<number>
Example: http://localhost:4000/multiply?num1=5&num2=3

Division
GET /divide?num1=<number>&num2=<number>
Example: http://localhost:4000/divide?num1=5&num2=3

Will return an error if attempting to divide by zero.

Exponentiation
GET /exponentiate?base=<number>&exponent=<number>
Example: http://localhost:4000/exponentiate?base=2&exponent=3

Square Root
GET /sqrt?num=<number>
Example: http://localhost:4000/sqrt?num=16

Will return an error if a negative number is provided.

Modulo
GET /modulo?num1=<number>&num2=<number>
Example: http://localhost:4000/modulo?num1=10&num2=3

Logging
The service uses Winston for logging. All requests and arithmetic operation results are logged to the console and to a server.log file.

Logs are saved in server.log located in the root directory.

The following log levels are used:

info: For successful operations.

error: For invalid input or failed operations.

Contributing
Fork the repository.

Create a new branch (git checkout -b feature-name).

Make your changes.

Commit your changes (git commit -am 'Add feature').

Push to the branch (git push origin feature-name).


