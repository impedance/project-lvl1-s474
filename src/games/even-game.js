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

  const generateQuestion = () => {
    const random = generateNum(1, 20);
    const rightAnswer = isEven(random) ? 'yes' : 'no';
    const question = `${random}`;
    return [rightAnswer, question];
  };

  gameEngine(getGameData, generateQuestion);
};

export default evenGame;
