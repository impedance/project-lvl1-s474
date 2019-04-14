import gameEngine from '..';
import { generateNum, isEven } from '../utils';

const evenGame = () => {
  const getGameData = () => {
    const gameReply = 'Answer "yes" if number even otherwise answer "no".';
    const answerVariant = 'yes or no';
    const inputCondition = reply => reply === 'yes' || reply === 'no';
    const answerCondition = (answer, playerReply) => answer === playerReply;
    return [gameReply, answerVariant, inputCondition, answerCondition];
  };

  const genAnswerQuestion = (min, max) => {
    const numToAsk = generateNum(min, max);
    const rightAnswer = isEven(numToAsk) ? 'yes' : 'no';
    const question = `${numToAsk}`;
    return [rightAnswer, question];
  };

  gameEngine(getGameData, genAnswerQuestion);
};

export default evenGame;
