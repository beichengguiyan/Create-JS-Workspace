
function multiplyTable(firstNum, secondNum) {


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
        for (let j = 0; j < (i+1); j++) {
            let result = (firstNum + j) * (firstNum + i);
            let str = (firstNum + j) + "*" + (firstNum + i) + "=" + result;
            row.push(str);
        }
        generateArray.push(row);
    }
    return generateArray;
}


function printMultiplyTable(generateArray) {

}


module.exports = { isValid, generateMultiplyArray, printMultiplyTable, multiplyTable };
