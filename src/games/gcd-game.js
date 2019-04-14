import gameEngine from '..';
import { generateNum } from '../utils';

const findDivisor = (num1, num2) => {
  const smallest = num1 >= num2 ? num2 : num1;
  for (let i = smallest; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 0;
};

const gcdGame = () => {
  const getGameData = () => {
    const gameReply = 'Find the greatest common divisor of given numbers.';
    const answerVariant = 'number';
    const inputCondition = reply => !Number.isNaN(reply);
    const answerCondition = (answer, playerReply) => answer === Number(playerReply);
    return [gameReply, answerVariant, inputCondition, answerCondition];
  };

  const generateQuestion = () => {
    const firstNum = generateNum(1, 100);
    const secondNum = generateNum(1, 100);
    const rightAnswer = findDivisor(firstNum, secondNum);
    const question = `${firstNum} ${secondNum}`;
    return [rightAnswer, question];
  };

  gameEngine(getGameData, generateQuestion);
};

export default gcdGame;
