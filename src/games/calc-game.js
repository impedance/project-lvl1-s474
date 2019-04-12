import { generateNum } from '../index';

console.log('What is the result of the expression?\n');
const operations = [
  [(a, b) => a + b, '+'],
  [(a, b) => a * b, '*'],
  [(a, b) => a - b, '-'],
];

const getCalcGameData = () => {
  const firstNum = generateNum(1, 20);
  const secondNum = generateNum(1, 20);
  const operation = operations[generateNum(0, 3)];
  const rightAnswer = operation[0](firstNum, secondNum);
  const question = `Question: ${firstNum} ${operation[1]} ${secondNum}`;
  return [question, rightAnswer]
}

export default getCalcGameData;
