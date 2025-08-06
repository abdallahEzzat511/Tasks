let student = {
  name: "Abdallah",
  age: 20,
  grade: "B",
  isGraduated: false
};

console.log("Name:", student.name);
console.log("Age:", student.age);

student.grade = "A";

console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));

student.email = "Abdallah@example.com";

delete student.isGraduated;

let output = `
Student object after modifications:
${JSON.stringify(student, null, 2)}
`;

console.log(output);
document.getElementById("output").innerText = output;
