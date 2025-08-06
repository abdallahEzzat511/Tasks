let numbers = [5, -2, 10, -7, 8, -3, 1, 4, -6, 9];
let sumPositive = 0;
let sumAll = 0;

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  sumAll += num;

  if (num < 0) continue;
  sumPositive += num;
}

numbers.push(15);

numbers.shift();

let output = `
Original array (after push and shift): ${numbers}
Sum of positive numbers: ${sumPositive}
Sum of all numbers: ${sumAll}
`;

console.log(output);
document.getElementById("output").innerText = output;
