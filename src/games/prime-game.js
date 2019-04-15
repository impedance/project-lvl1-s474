import gameEngine from '..';
import generateNum from '../utils';

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
  const gameReply = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getAnswerQuestion = () => {
    const question = generateNum(0, 100);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    return [rightAnswer, question];
  };

  gameEngine(gameReply, getAnswerQuestion);
};

export default primeGame;
