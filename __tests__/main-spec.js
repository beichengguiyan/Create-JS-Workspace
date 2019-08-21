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

it('should return string', () => {
    //given
    let array = [["2*2=4"],
    ["2*3=6","3*3=9"]
    ];
    //when
    const result = printMultiplyTable(array);
    //then
    expect(result).toBe("2*2=4 \n2*3=6 3*3=9 \n");
}); 

it('should print', () => {
    //given
    let firstNum = 2;
    let secondNum = 3;
    //when
    const result = multiplyTable(firstNum, secondNum);
    //then
    expect(result).toBe("2*2=4 \n2*3=6 3*3=9 \n");
});