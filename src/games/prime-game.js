import gameEngine from '..';
import { generateNum } from '../utils';

const isPrime = (num) => {
  if (num > 1) {
    for (let i = num - 1; i > 1; i -= 1) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const primeGame = () => {
  const getGameData = () => {
    const gameReply = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    const answerVariant = 'yes or no';
    const inputType = 'text';
    return [gameReply, answerVariant, inputType];
  };

  const genAnswerQuestion = (min, max) => {
    const numToAsk = generateNum(min, max);
    const rightAnswer = isPrime(numToAsk) ? 'yes' : 'no';
    const question = `${numToAsk}`;
    return [rightAnswer, question];
  };

  gameEngine(getGameData, genAnswerQuestion);
};

export default primeGame;
