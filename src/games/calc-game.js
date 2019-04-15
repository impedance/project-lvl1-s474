import gameEngine from '..';
import { generateNum } from '../utils';

const operations = [
  [(a, b) => a + b, '+'],
  [(a, b) => a * b, '*'],
  [(a, b) => a - b, '-'],
];

const calcGame = () => {
  const getGameData = () => {
    const gameReply = 'What is the result of the expression?';
    const answerVariant = 'numbers';
    const inputType = 'number';
    return [gameReply, answerVariant, inputType];
  };
  const genAnswerQuestion = (min, max) => {
    const firstNum = generateNum(min, max);
    const secondNum = generateNum(min, max);
    const operation = operations[generateNum(0, operations.length)];
    const [functionOperation, operationSign] = operation;
    const rightAnswer = functionOperation(firstNum, secondNum);
    const question = `${firstNum} ${operationSign} ${secondNum}`;
    return [rightAnswer, question];
  };

  gameEngine(getGameData, genAnswerQuestion);
};

export default calcGame;
