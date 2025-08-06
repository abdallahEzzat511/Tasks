let students = [
  { name: "Abdallah", age: 20, grade: "B", isGraduated: true },
  { name: "Sara", age: 22, grade: "A", isGraduated: false },
  { name: "Mona", age: 21, grade: "C", isGraduated: true },
];

let totalAge = 0;
let graduatedCount = 0;
let notGraduatedCount = 0;

for (let i = 0; i < students.length; i++) {
  totalAge += students[i].age;

  if (students[i].isGraduated) {
    graduatedCount++;
  } else {
    notGraduatedCount++;
  }

  console.log("Keys:", Object.keys(students[i]));
  console.log("Values:", Object.values(students[i]));
}

let newStudent = {
  name: "Youssef",
  age: 23,
  grade: "A",
  isGraduated: false
};
students.push(newStudent);

for (let i = 0; i < students.length; i++) {
  delete students[i].isGraduated;
}

let averageAge = totalAge / students.length;

let output = `
Student Names: ${students.map(s => s.name).join(", ")}
Average Age: ${averageAge.toFixed(2)}
Graduated: ${graduatedCount}
Not Graduated: ${notGraduatedCount}

Updated Students List:
${JSON.stringify(students, null, 2)}
`;

console.log(output);
document.getElementById("output").innerText = output;
