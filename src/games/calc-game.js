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
  const operation = operations[generateNum(0, operations.length)];
  const rightAnswer = operation[0](firstNum, secondNum);
  const question = `Question: ${firstNum} ${operation[1]} ${secondNum}`;
  const answerVariant = 'numbers';
  const inputCondition = reply => !Number.isNaN(reply);
  const answerCondition = (answer, playerReply) => answer === Number(playerReply);
  return [question, rightAnswer, answerVariant, inputCondition, answerCondition];
};

export default getCalcGameData;
