// Prompt the user for the first number and store it in num1
let num1 = prompt("Enter the first number:");
// Convert num1 to a number
num1 = parseFloat(num1);

// Check the type of num1 to ensure it's a number
console.log("Type of num1:", typeof num1);

// Prompt the user for the second number and store it in num2
let num2 = prompt("Enter the second number:");
// Convert num2 to a number
num2 = parseFloat(num2);

// Check the type of num2 to ensure it's a number
console.log("Type of num2:", typeof num2);

// Calculate the sum
let sum = num1 + num2;
// Calculate the difference
let difference = num1 - num2;
// Calculate the product
let product = num1 * num2;
// Calculate the quotient (handling division by zero)
let quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

// Display the results in alerts
alert("The sum of " + num1 + " and " + num2 + " is " + sum);
alert("The difference between " + num1 + " and " + num2 + " is " + difference);
alert("The product of " + num1 + " and " + num2 + " is " + product);
alert("The quotient of " + num1 + " and " + num2 + " is " + quotient);




