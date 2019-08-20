const add = require('../main');

it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

it ('should return multiply tabale', () => {
//given
const firstParameter = 5;
const secondParameter = 3;
//when
const result = checkLegalInput(firstParameter,secondParameter);
//then
    expect(result).toBe(null);
}); 