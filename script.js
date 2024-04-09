const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\-\s]?\d{3}[\-\s]?\d{4}$/;

const checkPhoneNumber = () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } else if (regex.test(userInput.value)) {
    result.innerText = `Valid US number: ${userInput.value}`;
  } else {
    result.innerText = `Invalid US number: ${userInput.value}`;
  }
};

const clearPhoneNumber = () => {
  result.innerText = "";
};

checkButton.addEventListener('click', checkPhoneNumber);
clearButton.addEventListener('click', clearPhoneNumber);
