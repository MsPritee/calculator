let string = ''
let inputField = document.querySelector('input');

let buttons = document.querySelectorAll('button');


function handleSubmit(value) {
    if (value == '=') {
        string = eval(string);
        inputField.value = string;
    } else if (value == 'C') {
        string = '';
        inputField.value = string;
    } else if (value == '00') {
        string = string + '00';
        inputField.value = string;
    } else if (value === '<--') {
        string = string.slice(0, -1);
        inputField.value = string;
    } else {
        string = string + value;
        inputField.value = string;
    }
}
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        handleSubmit(e.target.innerHTML);
    })
})


document.addEventListener('keydown', (e) => {
    const keyValue = e.key;
    if (/^[0-9]$/.test(keyValue) || keyValue === 'C' || keyValue === '%' || keyValue === '/' || keyValue === '*' || keyValue === '-' || keyValue === '+' || keyValue === '=' || keyValue === '00' || keyValue === 'Backspace') {
        if (keyValue === 'Backspace') {
            handleSubmit('backspace');

        }
        else {
            handleSubmit(keyValue);
        }
    }
})
