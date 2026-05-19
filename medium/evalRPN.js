/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens.length === 1) return parseInt(tokens[0]);

    const numbers = [];

    let number1 = null;
    let number2 = null;

    for (let i = 0; i < tokens.length; i++) {

        switch(tokens[i]) {
            case '+':
                number2 = numbers.pop() - 0;
                number1 = numbers.pop() - 0;
                numbers.push(number1 + number2);
                break;
            case '-':
                number2 = numbers.pop() - 0;
                number1 = numbers.pop() - 0;
                numbers.push(number1 - number2);
                break;
            case '*':
                number2 = numbers.pop() - 0;
                number1 = numbers.pop() - 0;
                numbers.push(number1 * number2);
                break;
            case '/':
                number2 = numbers.pop() - 0;
                number1 = numbers.pop() - 0;
                numbers.push(Math.trunc(number1 / number2));
                break;
            default:
                numbers.push(tokens[i]);
        }

    }

    return numbers[0];
};

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));
