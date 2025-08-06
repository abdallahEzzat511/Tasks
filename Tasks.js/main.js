let name = prompt("What's your name?");
let birthYear = prompt("What is your birth year?");
let isStudent = confirm("Are you a student?");

birthYear = Number(birthYear);

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
let category = "";

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

  let message = `Hello ${name}, you are ${age} years old.\nCategory: ${category}.`;
  if (isStudent) {
    message += `\nDon't forget to study hard!`;
  }

  console.log(message);

  alert(message);

  document.getElementById("output").innerText = message;
}
