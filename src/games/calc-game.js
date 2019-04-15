import gameEngine from '..';
import generateNum from '../utils';

const operations = [
  [(a, b) => a + b, '+'],
  [(a, b) => a * b, '*'],
  [(a, b) => a - b, '-'],
];

const getCalcGameData = () => {
  const gameReply = 'What is the result of the expression?';
  const getAnswerQuestion = () => {
    const firstNum = generateNum(0, 100);
    const secondNum = generateNum(0, 100);
    const operationsItem = operations[generateNum(0, operations.length)];
    const [operation, sign] = operationsItem;
    const rightAnswer = operation(firstNum, secondNum);
    const question = `${firstNum} ${sign} ${secondNum}`;
    return [rightAnswer.toString(), question];
  };

  gameEngine(gameReply, getAnswerQuestion);
};

export default calcGame;
