import { generateNum, gameEngine } from '../index';

const evenGame = () => {
  const getGameData = () => {
    const gameReply = 'Answer "yes" if number even otherwise answer "no".\n';
    const answerVariant = 'yes or no';
    const inputCondition = reply => reply === 'yes' || reply === 'no';
    const answerCondition = (answer, playerReply) => answer === playerReply;
    return [gameReply, answerVariant, inputCondition, answerCondition];
  };
  const generateQuestion = () => {
    const random = generateNum(1, 20);
    const isEven = random % 2 === 0;
    const rightAnswer = isEven ? 'yes' : 'no';
    const question = `Question: ${random}`;
    return [rightAnswer, question];
  };

  gameEngine(getGameData, generateQuestion);
};

export default evenGame;
