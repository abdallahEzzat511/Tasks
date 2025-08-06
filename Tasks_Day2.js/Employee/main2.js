window.onload = function () {
  let name = prompt("Enter your name:");
  let age = Number(prompt("Enter your age:"));
  let experience = Number(prompt("Enter your years of experience:"));
  let rating = Number(prompt("Rate yourself (1 to 10):"));
  let baseSalary = 10000; 
  let jobCategory = "";
  if (experience < 2) {
    jobCategory = "Junior";
  } else if (experience >= 2 && experience <= 5) {
    jobCategory = "Mid-Level";
  } else if (experience > 5 && experience <= 10) {
    jobCategory = "Senior";
  } else {
    jobCategory = "Expert";
  }

  let performance = "";
  switch (true) {
    case (rating >= 9):
      performance = "Excellent";
      break;
    case (rating >= 7):
      performance = "Good";
      break;
    case (rating >= 5):
      performance = "Average";
      break;
    default:
      performance = "Needs Improvement";
  }

  let bonusPercent = 0;
  if (experience < 3) {
    bonusPercent = 0.10;
  } else if (experience <= 5) {
    bonusPercent = 0.15;
  } else {
    bonusPercent = 0.20;
  }

  let bonus = baseSalary * bonusPercent;
  let finalSalary = baseSalary + bonus;

  let currentHour = new Date().getHours();
  let shift = "";
  if (currentHour >= 9 && currentHour < 18) {
    shift = "Day Shift";
  } else {
    shift = "Night Shift";
  }

  let summary = `
Employee Name: ${name}
Age: ${age}
Experience: ${experience} years
Job Category: ${jobCategory}
Performance: ${performance}
Base Salary: ${baseSalary} EGP
Bonus: ${bonus.toFixed(2)} EGP
Final Salary: ${finalSalary.toFixed(2)} EGP
Current Shift: ${shift}
  `;

  console.log(summary);
  alert(summary);
  document.getElementById("output").innerText = summary;
};
