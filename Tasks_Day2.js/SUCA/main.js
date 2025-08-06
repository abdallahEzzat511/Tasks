// Step 1: Get user input
let name = prompt("What's your name?");
let birthYear = prompt("What is your birth year?");
let isStudent = confirm("Are you a student?");

// Convert birthYear to number
birthYear = Number(birthYear);

// Step 2: Process input
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
let category = "";

// Check for valid age
if (isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
  alert("Please enter a valid birth year.");
} else {
  if (age < 13) {
    category = "Kid";
  } else if (age >= 13 && age <= 17) {
    category = "Teen";
  } else if (age >= 18 && age <= 59) {
    category = "Adult";
  } else {
    category = "Senior";
  }

  // Step 3: Build output message
  let message = `Hello ${name}, you are ${age} years old.\nCategory: ${category}.`;
  if (isStudent) {
    message += `\nDon't forget to study hard!`;
  }

  // Output to console
  console.log(message);

  // Output to alert
  alert(message);

  // Output to HTML
  document.getElementById("output").innerText = message;
}
