const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let binaryArr = [];
    let morseArr = [];
    let binaryStart = 0;
    let binaryEnd = 10;
    let result = '';

    for (i = 0; i < expr.length / 10; i++) {
        if (expr.slice(binaryStart, binaryEnd) === '**********') {
            binaryArr.push(' ');
        }
        else {
            binaryArr.push(expr.slice(binaryStart, binaryEnd));
        }
        binaryStart += 10;
        binaryEnd += 10;
    }

    for (let i = 0; i < binaryArr.length; i++) {
        let morseStart = 0;
        let morseEnd = 2;
        let subStr = '';
        for (let j = 0; j < binaryArr[i].length / 2; j++) {
            if (binaryArr[i].slice(morseStart, morseEnd) === '11') {
                subStr += '-';
            }
            else if (binaryArr[i].slice(morseStart, morseEnd) === '10') {
                subStr += '.';
            }
            morseStart += 2;
            morseEnd += 2;
        }
        morseArr.push(subStr);
    }

    for (let i = 0; i < morseArr.length; i++) {
        if (morseArr[i] === '') {
            result += ' ';
        }
        else {
            result += MORSE_TABLE[morseArr[i]];
        }
    }

    return result;
}

module.exports = {
    decode
}