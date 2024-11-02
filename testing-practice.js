function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function reverseString(text) {
    let reversed = '';
    
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed;
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

export { capitalize, reverseString, calculator };