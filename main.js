
function multiplyTable(firstNum, secondNum) {
    let result;
    let generateArray
    if (isValid(firstNum, secondNum)) {
        generateArray = generateMultiplyArray(firstNum, secondNum);
        result = printMultiplyTable(generateArray);
        return result;
    } else {
        return null;
    }
}

function isValid(firstNum, secondNum) {
    let result;
    result = firstNum <= secondNum;
    return result
}

function generateMultiplyArray(firstNum, secondNum) {
    let generateArray = [];
    for (let i = 0; i < (secondNum - firstNum + 1); i++) {
        let row = [];
        for (let j = 0; j < (i + 1); j++) {
            let result = (firstNum + j) * (firstNum + i);
            let str = (firstNum + j) + "*" + (firstNum + i) + "=" + result;
            row.push(str);
        }
        generateArray.push(row);
    }
    return generateArray;
}

function printMultiplyTable(generateArray) {
    let result = "";
    for (let i = 0; i < generateArray.length; i++) {
        for (let j = 0; j < generateArray[i].length; j++) {
            result = result + generateArray[i][j] + " ";
        }
        result = result + "\n";
    }
    return result;
}

module.exports = { isValid, generateMultiplyArray, printMultiplyTable, multiplyTable };
