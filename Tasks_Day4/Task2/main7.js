function greetUser() {
  setTimeout(() => {
    console.log("Hello, User!");
  }, 3000);
}

greetUser();

function countdown() {
  let count = 10;
  const intervalId = setInterval(() => {
    if (count > 0) {
      console.log(count);
      count--;
    } else {
      console.log("Time's up!");
      clearInterval(intervalId);
    }
  }, 1000);
}

countdown();

function countdownModified() {
  let count = 10;
  let secondsPassed = 0;

  const intervalId = setInterval(() => {
    if (secondsPassed >= 5) {
      console.log("Stopped after 5 seconds");
      clearInterval(intervalId);
    } else {
      console.log(count);
      count--;
      secondsPassed++;
    }
  }, 1000);
}

countdownModified();

function clearTimeoutExample() {
  const timeoutId = setTimeout(() => {
    console.log("This will be cleared!");
  }, 5000);

  clearTimeout(timeoutId);
}

clearTimeoutExample();
