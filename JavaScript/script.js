const screen = document.getElementById("screen");

function changeScreen(character) {
    screen.innerHTML += character;
}

function cleanUp() {
    screen.innerHTML = '';
}

function backspace() {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(screen.innerHTML);
        screen.innerHTML = Number.isInteger(result) ? result : result.toFixed(3);
    } catch (e) {
        screen.innerHTML = 'Erro';
    }
}

