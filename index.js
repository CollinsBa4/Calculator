let numberOfChars = 0;
let validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '/', '*'];

function makeExpression() {
    numberOfChars = document.querySelector('#numberOfChars').value
    render();
    charChecker();
}
Character Check
function charChecker() {
    Array.from(document.querySelectorAll('input[id^="Box"]')).forEach(ch => {
        ch.addEventListener('focus', () => {
            onkeypress = (event) => {
                if (!(validKeys.includes(event.key))) {
                    return false;
                }

            }
        }, false);
    })
}

function evaluateExpression() {
    // TODO: implement this function
    let operate = '';
    let boxValue = document.querySelectorAll('input[id^="Box"]');
    boxValue.forEach((box) => {
            operate += box.value;
        })
        // Checking for invalid evaluation
    try {
        const evaluate = eval(operate);
        answerBox.value = evaluate;
    } catch (error) {
        answerBox.value = 'ERR';
    }
}


function render() {
    const container = document.querySelector('.expression-line');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const expressionLine = document.createElement('li');
    for (let i = 0; i < numberOfChars; i++) {
        const box = document.createElement('input');
        box.type = 'text';
        box.id = `Box${i}`;
        box.className = 'expression-line';
        expressionLine.appendChild(box);
    }

    const evaluateButtonElement = document.createElement('button');
    evaluateButtonElement.innerHTML = 'Evaluate';
    evaluateButtonElement.id = 'evaluateButton';
    evaluateButtonElement.className = 'expression-line';
    evaluateButtonElement.onclick = () => evaluateExpression();
    expressionLine.appendChild(evaluateButtonElement);

    const answerBox = document.createElement('input');
    answerBox.id = 'answerBox';
    answerBox.className = 'expression-line';
    expressionLine.appendChild(answerBox);
    container.appendChild(expressionLine);
}

document.querySelector('#makeExpression').addEventListener('click', makeExpression);
render();

const numbers = [3, 342, 124, 22, 23]
let ints = numbers.join('')
let x = +ints
console.log(numbers.sort(), typeof x)