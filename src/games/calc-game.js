import gameEngine from '..';
import { generateNum } from '../utils';

const operations = [
  [(a, b) => a + b, '+'],
  [(a, b) => a * b, '*'],
  [(a, b) => a - b, '-'],
];

const calcGame = () => {
  const gameDescription = {
    gameReply: 'What is the result of the expression?',
    answerVariant: 'numbers',
    inputType: 'number',
  };
  const getAnswerQuestion = () => {
    const firstNum = generateNum(0, 100);
    const secondNum = generateNum(0, 100);
    const operation = operations[generateNum(0, operations.length)];
    const [functionOperation, operationSign] = operation;
    const rightAnswer = functionOperation(firstNum, secondNum);
    const question = `${firstNum} ${operationSign} ${secondNum}`;
    return [rightAnswer, question];
  };

  gameEngine(gameDescription, getAnswerQuestion);
};

export default calcGame;
