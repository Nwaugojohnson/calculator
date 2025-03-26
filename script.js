const displayElement = document.getElementById("display");

function appendToDisplay(value) {
    if (displayElement.innerText === '0') {
        displayElement.innerText = value;
    }else {
        displayElement.innerText += value;
    }
}

function clearDisplay() {
    displayElement.innerText = '0';
}

function delDisplay() {
    displayElement.innerText=displayElement.innerText.slice(0,-1);
}

function calculate() {
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch {
        displayElement.innerText = 'Error';
    }
}