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

function caesarCipher(text, shift) { // shift is the amount in ASCII decimal value to be moved.
    if (shift < -26 || shift > 26) {
        return 'The shift factor needs to be from -26 to 26.';
    }

    let encoded = '';
    let wrapAround = 0; 
    
    if (shift < 0) {
        shift += 26; // Make shift positive.
    }

    for (let i = 0; i <= text.length - 1; i++) {
        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) { // The ASCII decimal value for A-Z is 65 to 90.
            if (text.charCodeAt(i) + shift <= 90) {
                encoded += String.fromCharCode(text.charCodeAt(i) + shift);
            } else { // Wrap around if the value is over 90.
                wrapAround = text.charCodeAt(i) + shift - 91; // An extra -1 is needed to prevent the value from going off by 1.
                encoded += String.fromCharCode(65 + wrapAround);
            }
        } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) { // The ASCII decimal value for a-z is 97 to 122.
            if (text.charCodeAt(i) + shift <= 122) {
                encoded += String.fromCharCode(text.charCodeAt(i) + shift);
            } else { // Wrap around if the value is over 122.
                wrapAround = text.charCodeAt(i) + shift - 123; // An extra -1 is needed to prevent the value from going off by 1.
                encoded += String.fromCharCode(97 + wrapAround);
            }
        } else { // For other characters
            encoded += text[i];
        }
    }

    return encoded;
}

export { capitalize, reverseString, calculator, caesarCipher };