const currentInputDisplay = document.getElementById('currentInput');
const previousInputDisplay = document.getElementById('previousInput');
const buttons = Array.from(document.querySelectorAll('button'));
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentInput = '';
            previousInput = '';
            operator = '';
            currentInputDisplay.textContent = '0';
            previousInputDisplay.textContent = '0';
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                currentInputDisplay.textContent = currentInput;
                previousInput = '';
                operator = '';
                previousInputDisplay.textContent = '0';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
                previousInputDisplay.textContent = previousInput + ' ' + operator;
                currentInputDisplay.textContent = '0';
            }
        } else {
            currentInput += value;
            currentInputDisplay.textContent = currentInput;
        }
    });
});