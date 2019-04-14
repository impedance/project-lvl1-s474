import gameEngine from '..';
import { generateNum } from '../utils';

const isEven = num => num % 2 === 0;

const evenGame = () => {
  const getGameData = () => {
    const gameReply = 'Answer "yes" if number even otherwise answer "no".';
    const answerVariant = 'yes or no';
    const inputType = 'text';
    return [gameReply, answerVariant, inputType];
  };

  const genAnswerQuestion = (min, max) => {
    const numToAsk = generateNum(min, max);
    const rightAnswer = isEven(numToAsk) ? 'yes' : 'no';
    const question = `${numToAsk}`;
    return [rightAnswer, question];
  };

  return gameEngine(getGameData, genAnswerQuestion);
};

export default evenGame;
