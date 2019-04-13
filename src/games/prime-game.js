import { generateNum, gameEngine } from '../index';

const primeGame = () => {
  const getGameData = () => {
    const gameReply = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
    const answerVariant = 'yes or no';
    const inputCondition = reply => reply === 'yes' || reply === 'no';
    const answerCondition = (answer, playerReply) => answer === playerReply;
    return [gameReply, answerVariant, inputCondition, answerCondition];
  };
  const isPrime = (num) => {
    for (let i = num - 1; i > 1; i -= 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const generateQuestion = () => {
    const random = generateNum(1, 100);
    const rightAnswer = isPrime(random) ? 'yes' : 'no';
    const question = `Question: ${random}`;
    return [rightAnswer, question];
  };

  gameEngine(getGameData, generateQuestion);
};

export default primeGame;
