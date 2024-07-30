<script>
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value) {
                handleInput(value);
            } else if (this.id === 'clear') {
                clearDisplay();
            } else if (this.id === 'equals') {
                calculateResult();
            }
        });
    });

    function handleInput(value) {
        if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            currentInput += value;
        }
        updateDisplay();
    }

    function updateDisplay() {
        display.textContent = currentInput || previousInput || '0';
    }

    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay();
    }

    function calculateResult() {
        if (currentInput && previousInput && operator) {
            const result = eval(`${previousInput} ${operator} ${currentInput}`);
            currentInput = result.toString();
            operator = '';
            previousInput = '';
            updateDisplay();
        }
    }
});
</script>
