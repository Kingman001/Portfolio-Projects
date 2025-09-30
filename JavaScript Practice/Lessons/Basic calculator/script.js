document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';
    let lastInput = '';
    let operator = '';
    let resultShown = false;

    // Helper to update display
    function updateDisplay(value) {
        if (value && !isNaN(value) && value !== 'Error') {
            value = Number(parseFloat(value).toFixed(8)).toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 8
            });
        }
        display.value = value;
    }

    // Handle number and decimal button clicks
    document.querySelectorAll('.num-btn, .num-btn-zero, .decimal-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            if (resultShown) {
                currentInput = '';
                resultShown = false;
            }
            if (this.value === '.' && currentInput.includes('.')) {
                return; // Prevent multiple decimal points
            }
            if (currentInput.includes('.')) {
                const decimalPlaces = currentInput.split('.')[1]?.length || 0;
                if (decimalPlaces >= 8 && this.value !== '.') {
                    return; // Limit to 8 decimal places
                }
            }
            currentInput += this.value;
            updateDisplay(currentInput);
        });
    });

    // Handle operator button clicks
    document.querySelectorAll('.ops-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            if (currentInput === '' || currentInput === '.') return;
            if (lastInput && operator && currentInput) {
                lastInput = calculate(lastInput, currentInput, operator);
                updateDisplay(lastInput);
                currentInput = '';
            } else if (currentInput) {
                lastInput = currentInput;
                currentInput = '';
            }
            operator = this.value;
            resultShown = false;
        });
    });

    // Handle equal button
    document.querySelector('.equal-btn').addEventListener('click', function () {
        if (lastInput && operator && currentInput && currentInput !== '.') {
            let result = calculate(lastInput, currentInput, operator);
            updateDisplay(result);
            lastInput = '';
            currentInput = result.toString();
            operator = '';
            resultShown = true;
        }
    });

    // Handle clear (C)
    document.querySelector('input[name="clear"]').addEventListener('click', function () {
        currentInput = '';
        lastInput = '';
        operator = '';
        updateDisplay('');
    });

    // Handle clear entry (CE)
    document.querySelector('input[name="clear-entry"]').addEventListener('click', function () {
        currentInput = '';
        updateDisplay('');
    });

    // Handle delete (DEL)
    document.querySelector('input[name="delete"]').addEventListener('click', function () {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    });

    // Keyboard input support
    document.addEventListener('keydown', function (event) {
        const key = event.key;

        // Prevent default behavior for calculator keys to avoid unwanted input in the display
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '\\', 'Enter', '=', 'Escape', 'Backspace', 'c', 'e'].includes(key)) {
            event.preventDefault();
        }

        // Numbers and decimal point
        if (/[0-9]/.test(key) || key === '.') {
            if (resultShown) {
                currentInput = '';
                resultShown = false;
            }
            if (key === '.' && currentInput.includes('.')) {
                return; // Prevent multiple decimal points
            }
            if (currentInput.includes('.')) {
                const decimalPlaces = currentInput.split('.')[1]?.length || 0;
                if (decimalPlaces >= 8 && key !== '.') {
                    return; // Limit to 8 decimal places
                }
            }
            currentInput += key;
            updateDisplay(currentInput);
        }
        // Operators
        else if (['+', '-', '*', '/', '\\'].includes(key)) {
            if (currentInput === '' || currentInput === '.') return;
            if (lastInput && operator && currentInput) {
                lastInput = calculate(lastInput, currentInput, operator);
                updateDisplay(lastInput);
                currentInput = '';
            } else if (currentInput) {
                lastInput = currentInput;
                currentInput = '';
            }
            operator = key;
            resultShown = false;
        }
        // Equals (Enter or =)
        else if (key === 'Enter' || key === '=') {
            if (lastInput && operator && currentInput && currentInput !== '.') {
                let result = calculate(lastInput, currentInput, operator);
                updateDisplay(result);
                lastInput = '';
                currentInput = result.toString();
                operator = '';
                resultShown = true;
            }
        }
        // Clear (Escape or 'c')
        else if (key === 'Escape' || key.toLowerCase() === 'c') {
            currentInput = '';
            lastInput = '';
            operator = '';
            updateDisplay('');
        }
        // Clear Entry ('e')
        else if (key.toLowerCase() === 'e') {
            currentInput = '';
            updateDisplay('');
        }
        // Delete (Backspace)
        else if (key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
        }
    });

    // Calculation logic
    function calculate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);
        let result;
        switch (op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = b !== 0 ? a / b : 'Error'; break;
            case '\\': result = b !== 0 ? a % b : 'Error'; break;
            default: result = b;
        }
        return typeof result === 'number' ? Number(result.toFixed(8)) : result;
    }
});