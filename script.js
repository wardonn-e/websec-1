const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationElement = document.getElementById('operation');
const resultsDiv = document.getElementById('current-result');
const btn = document.getElementById('calculate');

if (!num1Input || !num2Input || !operationElement || !resultsDiv || !btn) {
  throw new Error('Не все элементы найдены');
}

btn.addEventListener('click', calculate);

function validate(input, errorDiv) {
    input.classList.remove('error');
    errorDiv.textContent = '';

    if (input.value.trim() === '') {
        input.classList.add('error');
        errorDiv.textContent = 'Введите число';
        return false;
    }

    return true;
}

function calculate() {
    const operation = operationElement.value;

    const error1 = document.getElementById('error1');
    const error2 = document.getElementById('error2');

    const valid1 = validate(num1Input, error1);
    const valid2 = validate(num2Input, error2);

    if (!valid1 || !valid2) return;

    const a = parseFloat(num1Input.value);
    const b = parseFloat(num2Input.value);

    if (operation === '/' && b === 0) {
        num2Input.classList.add('error');
        error2.textContent = 'Деление на ноль невозможно';
        return;
    }

    let result;

    switch (operation) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
    }

    const operationText = `${a} ${operation} ${b} = ${result}`;

    const oldItems = resultsDiv.querySelectorAll('div');
    oldItems.forEach(item => item.classList.add('old'));

    const newItem = document.createElement('div');
    newItem.textContent = operationText;
    resultsDiv.appendChild(newItem);
}