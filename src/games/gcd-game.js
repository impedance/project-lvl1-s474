import gameEngine from '..';
import { generateNum } from '../utils';

const getGreatestCommonDivisor = (num1, num2) => {
  const smallest = num1 >= num2 ? num2 : num1;
  for (let i = smallest; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 0;
};

const gcdGame = () => {
  const gameDescription = {
    gameReply: 'Find the greatest common divisor of given numbers.',
    answerVariant: 'number',
    inputType: 'number',
  };

  const genAnswerQuestion = (min, max) => {
    const firstNum = generateNum(min, max);
    const secondNum = generateNum(min, max);
    const rightAnswer = getGreatestCommonDivisor(firstNum, secondNum);
    const question = `${firstNum} ${secondNum}`;
    return [rightAnswer, question];
  };

  gameEngine(gameDescription, genAnswerQuestion);
};

export default gcdGame;
