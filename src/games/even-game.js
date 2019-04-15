import gameEngine from '..';
import { generateNum } from '../utils';

const isEven = num => num % 2 === 0;

const evenGame = () => {
  const gameDescription = {
    gameReply: 'Answer "yes" if number even otherwise answer "no".',
    answerVariant: 'yes or no',
    inputType: 'text',
  };

  const getAnswerQuestion = () => {
    const numToAsk = generateNum(0, 100);
    const rightAnswer = isEven(numToAsk) ? 'yes' : 'no';
    const question = `${numToAsk}`;
    return [rightAnswer, question];
  };

  return gameEngine(gameDescription, getAnswerQuestion);
};

export default evenGame;
