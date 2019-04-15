import gameEngine from '..';
import generateNum from '../utils';

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
  const gameReply = 'Find the greatest common divisor of given numbers.';
  const getAnswerQuestion = () => {
    const firstNum = generateNum(0, 100);
    const secondNum = generateNum(0, 100);
    const rightAnswer = getGreatestCommonDivisor(firstNum, secondNum);
    const question = `${firstNum} ${secondNum}`;
    return [rightAnswer.toString(), question];
  };

  gameEngine(gameReply, getAnswerQuestion);
};

export default gcdGame;
