function multiply(a, b) {
  return a * b;
}

function calculate(x, y, operation) {
  const result = operation(x, y);
  displayResult(result);
}

function displayResult(result) {
  console.log("Result:", result);
}

calculate(5, 3, multiply); // Output: Result: 15
