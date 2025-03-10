//your JS code here. If required.
// Select elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Function to simulate a delay using async/await and setTimeout
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the form submission and show the message after delay
async function handleSubmit() {
  const message = textInput.value; // Get the message input value
  const delayTime = parseInt(delayInput.value); // Get the delay value (in ms)

  // Check if both fields are filled and the delay is a positive number
  if (!message || isNaN(delayTime) || delayTime <= 0) {
    output.textContent = "Please enter a valid message and delay.";
    return;
  }

  // Display the message after the specified delay
  output.textContent = "Please wait..."; // Optional message before the delay

  // Wait for the delay
  await delay(delayTime);

  // Display the final message after delay
  output.textContent = message;
}

// Add event listener to the button to handle click event
btn.addEventListener("click", handleSubmit);
