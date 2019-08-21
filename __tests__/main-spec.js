const { isValid, generateMultiplyArray, printMultiplyTable, multiplyTable } = require('../main');


it('should number be valid', () => {
    //given
    let firstNum = 2;
    let secondNum = 3;
    //when
    const result = isValid(firstNum, secondNum);
    //then
    expect(result).toBe(true);
});

it('should generate multiply array', () => {
    //given
    let firstNum = 2;
    let secondNum = 3;
    //when
    const result = generateMultiplyArray(firstNum, secondNum);
    //then
    expect(result[0][0]).toBe("2*2=4");
    expect(result[1][0]).toBe("2*3=6");
    expect(result[1][1]).toBe("3*3=9");
}); 