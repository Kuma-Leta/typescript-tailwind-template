// Define state variables
let expression = "";
let result = "";
const clearButton = document.querySelector(".clear");
clearButton?.addEventListener("click", () => {
  expression = "";
  result = "";
  const expressionDisplay = document.getElementById("expression-display");
  const resultDisplay = document.getElementById("result-display");
  if (expressionDisplay && resultDisplay) {
    expressionDisplay.textContent = expression;
    resultDisplay.textContent = result;
  }
});
// Function to handle button clicks
function handleButtonClick(value: string) {
  // Append the clicked value to the expression
  expression += value;

  // Update the UI with the current expression
  updateUI();
}

// Function to perform calculation
function calculateResult() {
  try {
    // Evaluate the expression
    result = eval(expression);

    // Update the UI with the result
    updateUI();
  } catch (error) {
    // Handle errors (e.g., division by zero)
    result = "Error";
    updateUI();
  }
}

// Function to update the UI
function updateUI() {
  // Update the display with the current expression and result
  const expressionDisplay = document.getElementById("expression-display");
  const resultDisplay = document.getElementById("result-display");

  if (expressionDisplay && resultDisplay) {
    expressionDisplay.textContent = expression;
    resultDisplay.textContent = result;
  }
}

// Event listeners for button clicks
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent || "";
    handleButtonClick(value);
  });
});

// Event listener for the "=" button
document
  .getElementById("equals-btn")
  ?.addEventListener("click", calculateResult);

// Initial UI update
updateUI();
