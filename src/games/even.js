import gameEngine from '..';
import generateNum from '../utils';

const isEven = num => num % 2 === 0;

const getEvenGameData = () => {
  const gameReply = 'Answer "yes" if number even otherwise answer "no".';
  const getAnswerQuestion = () => {
    const question = generateNum(0, 100);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return [rightAnswer, question];
  };

  return gameEngine(gameReply, getAnswerQuestion);
};

export default getEvenGameData;
