const screen = document.getElementById("screen");
let resetValue = false;
const operators = ['+', '-', '*', '/'];


function changeScreen(character) {
    if (screen.innerText === 'Erro' && operators.includes(character)) {
        screen.innerText = character.slice(0, -1);
    }

    if (!resetValue) {
        if (screen.innerText === '0' && !operators.includes(character)) {
            screen.innerText = character;
        } else {
            screen.innerText += character;
        }
    }

    if (resetValue) {
        if (operators.includes(character)) {
            screen.innerText += character;
            resetValue = false;
        } else {
            screen.innerText = character;
            resetValue = false;
        }
    }
}

function cleanUp() {
    screen.innerText = '0';
}

function backspace() {
    if (screen.innerText.length > 1) {
        screen.innerText = screen.innerText.slice(0, -1);
    } else {
        screen.innerText = '0';
    }
}

function calculate() {
    try {
        const result = math.evaluate(screen.innerText);
        screen.innerText = Number.isInteger(result) ? result : result.toFixed(3);
        resetValue = true;
    } catch (e) {
        screen.innerText = 'Erro';
        resetValue = true;
    }
}

