import gameEngine from '..';
import { generateNum } from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = Math.floor(num / 2); i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const gameDescription = {
    gameReply: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    answerVariant: 'yes or no',
    inputType: 'text',
  };

  const getAnswerQuestion = () => {
    const question = generateNum(0, 100);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    return [rightAnswer, question];
  };

  gameEngine(gameDescription, getAnswerQuestion);
};

export default primeGame;
