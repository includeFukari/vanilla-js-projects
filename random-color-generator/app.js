let background = document.getElementById('background');
let currentColor = document.getElementById('currentColor');
let currentColorBackground = document.getElementById('currentColorBackground');
let changeColorButton = document.getElementById('changeColor');
let rgb = [];
let color = '';
let hexValue = '#';

function randColor() {
    return Math.round(Math.random()*255);
};

function changeColor() {
    rgb = [randColor(), randColor(), randColor()];
    color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    hexValue = '#';

    // Hex value
    for (let i = 0; i < 3; i++) {
        let hex = Number(rgb[i]).toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;
        };
        hexValue += hex;
    };

    // DOM Interaction
    background.style.backgroundColor = color;
    currentColor.style.color = color;
    currentColor.textContent = hexValue;
    if (rgb[0]+rgb[1]+rgb[2] < 318) {
        currentColorBackground.style.backgroundColor = '#EAEAEA';
        changeColorButton.style.backgroundColor = '#EAEAEA';
        changeColorButton.style.color = '#232323';
    } else {
        currentColorBackground.style.backgroundColor = '#232323';
        changeColorButton.style.backgroundColor = '#232323';
        changeColorButton.style.color = '#EAEAEA';
    };
};

function copyHex() {
    navigator.clipboard.writeText(hexValue);
    alert(`${hexValue} copied to clipboard.`);
};

changeColor(); // random color on load