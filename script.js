let currentInput = ''; // Making the current input empty but stores the input when you press the numbers

function appearToScreen(value) {
  currentInput += value;
  document.getElementById('result').value = currentInput;
} // This function adds the value

function clearScreen() {
  currentInput = '';
  document.getElementById('result').value = '';
} // This function clears the screen

function calculate() {
  try {
    const result = eval(currentInput);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Invalid input');
    } 
    document.getElementById('result').value = result;
    currentInput = result.toString();
  } catch (error) {
    alert(error.message);
    clearScreen();
  } 
} // Shows error if input isn't a number. Ex. "100/0"


// This section handles keyboard input
function handleKeyboardInput(event) {
  const key = event.key;
  if (/\d/.test(key)) {
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
