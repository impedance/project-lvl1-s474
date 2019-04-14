import gameEngine from '..';
import { generateNum } from '../utils';

const progressionLength = 10;
const progressionStep = 2;

const progressionGame = () => {
  const getGameData = () => {
    const gameReply = 'What number is missing in the progression?';
    const answerVariant = 'number';
    const inputCondition = reply => !Number.isNaN(reply);
    const answerCondition = (answer, playerReply) => answer === Number(playerReply);
    return [gameReply, answerVariant, inputCondition, answerCondition];
  };

  const generateQuestion = () => {
    const progression = [1];
    for (let i = 1; i < progressionLength; i += 1) {
      progression.push(progression[i - 1] + progressionStep);
    }
    const random = generateNum(1, progressionLength);
    const rightAnswer = progression[random];
    const question = progression.map((num) => {
      if (rightAnswer === num) {
        return '..';
      }
      return num;
    }).join(' ');
    return [rightAnswer, question];
  };

  gameEngine(getGameData, generateQuestion);
};

export default progressionGame;
