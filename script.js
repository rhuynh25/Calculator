let currentInput = ''; // Making the current input empty but stores the input when you press the numbers

// Function allows you to clear the screen
function appearToScreen(value) {
  currentInput += value;
  document.getElementById('result').value = currentInput;
}

function clearScreen() {
  currentInput = '';
  document.getElementById('result').value = '';
}

// Shows error if input isn't a number. Ex. "100/0"
function calculate() {
  try {
    const result = eval(currentInput);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Invalid input'); // Throwing back the error to the caller
    } 
    document.getElementById('result').value = result;
    currentInput = result.toString();
    document.getElementById('error-message').textContent = ''; 
  } catch (error) { // Catching the error in the function and handling it
    document.getElementById('error-message').textContent = error.message; 
    clearScreen();
  } // Display error message
}



// This section handles keyboard input
function handleKeyboardInput(event) {
  const key = event.key;
  if (/\d/.test(key)) { //implemented regex to check if the key is a number
    appearToScreen(key);
  } else if (key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
    appearToScreen(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
  } else if (key === 'Escape') {
    clearScreen();
  }
} 

document.addEventListener('keydown', handleKeyboardInput);
