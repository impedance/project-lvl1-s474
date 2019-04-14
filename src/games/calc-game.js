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
    const inputCondition = reply => !Number.isNaN(reply);
    const answerCondition = (answer, playerReply) => answer === Number(playerReply);
    return [gameReply, answerVariant, inputCondition, answerCondition];
  };
  const generateQuestion = () => {
    const firstNum = generateNum(1, 20);
    const secondNum = generateNum(1, 20);
    const operation = operations[generateNum(0, operations.length)];
    const rightAnswer = operation[0](firstNum, secondNum);
    const question = `${firstNum} ${operation[1]} ${secondNum}`;
    return [rightAnswer, question];
  };

  gameEngine(getGameData, generateQuestion);
};

export default calcGame;
