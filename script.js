let expression = '';
const resultDisplay = document.getElementById('result');

const buttonMap = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    'dot': '.',
    'add': '+',
    'subtract': '-',
    'multiply': '*',
    'divide': '/',
};

Object.keys(buttonMap).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener('click', () => {
            expression += buttonMap[id];
            resultDisplay.textContent = expression;
        });
    }
});

const icons = document.querySelectorAll('.icons button');
if (icons.length === 3) {
    icons[0].addEventListener('click', () => {
        expression = '';
        resultDisplay.textContent = '';
    });
    icons[1].addEventListener('click', () => {
        expression = expression.slice(0, -1);
        resultDisplay.textContent = expression;
    });
    icons[2].addEventListener('click', () => {
        try {
            const safeExpr = expression.replace(/x/g, '*');
            const result = eval(safeExpr);
            resultDisplay.textContent = result;
            expression = String(result);
        } catch {
            resultDisplay.textContent = 'Error';
            expression = '';
        }
        
    });
}