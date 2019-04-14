import gameEngine from '..';
import { generateNum } from '../utils';

const progressionLength = 10;
const diff = 2;
const start = 1;

const progressionGame = () => {
  const getGameData = () => {
    const gameReply = 'What number is missing in the progression?';
    const answerVariant = 'number';
    const inputCondition = reply => !Number.isNaN(reply);
    const answerCondition = (answer, playerReply) => answer === Number(playerReply);
    return [gameReply, answerVariant, inputCondition, answerCondition];
  };

  const genAnswerQuestion = (min) => {
    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(start + diff * i);
    }
    const numToAsk = generateNum(min, progressionLength);
    const rightAnswer = progression[numToAsk];
    const question = progression.map((num) => {
      if (rightAnswer === num) {
        return '..';
      }
      return num;
    }).join(' ');
    return [rightAnswer, question];
  };

  gameEngine(getGameData, genAnswerQuestion);
};

export default progressionGame;
