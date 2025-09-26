document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';
    let lastInput = '';
    let operator = '';
    let resultShown = false;

    // Helper to update display
    function updateDisplay(value) {
        display.value = value;
    }

    // Handle number button clicks
    document.querySelectorAll('.num-btn, .num-btn-zero').forEach(btn => {
        btn.addEventListener('click', function () {
            if (resultShown) {
                currentInput = '';
                resultShown = false;
            }
            currentInput += this.value;
            updateDisplay(currentInput);
        });
    });

    // Handle operator button clicks
    document.querySelectorAll('.ops-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            if (currentInput === '' && lastInput === '') return;
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
        if (lastInput && operator && currentInput) {
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

    // Calculation logic
    function calculate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b !== 0 ? a / b : 'Error';
            case '\\': return b !== 0 ? a % b : 'Error';
            default: return b;
        }
    }
});