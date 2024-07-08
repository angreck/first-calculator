let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperation(operation) {
    display.value += operation;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}