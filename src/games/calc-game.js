import gameEngine from '..';
import generateNum from '../utils';

const operations = [
  [(a, b) => a + b, '+'],
  [(a, b) => a * b, '*'],
  [(a, b) => a - b, '-'],
];

const calcGame = () => {
  const gameReply = 'What is the result of the expression?';
  const getAnswerQuestion = () => {
    const firstNum = generateNum(0, 100);
    const secondNum = generateNum(0, 100);
    const operation = operations[generateNum(0, operations.length)];
    const [functionOperation, operationSign] = operation;
    const rightAnswer = functionOperation(firstNum, secondNum);
    const question = `${firstNum} ${operationSign} ${secondNum}`;
    return [rightAnswer.toString(), question];
  };

  gameEngine(gameReply, getAnswerQuestion);
};

export default calcGame;
