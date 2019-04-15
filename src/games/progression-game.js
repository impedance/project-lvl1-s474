import gameEngine from '..';
import { generateNum } from '../utils';

const progressionLength = 10;
const diff = 2;
const start = 1;

const progressionGame = () => {
  const gameDescription = {
    gameReply: 'What number is missing in the progression?',
    answerVariant: 'number',
    inputType: 'number',
  };

  const genAnswerQuestion = () => {
    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(start + diff * i);
    }
    const shadowedNum = generateNum(0, progressionLength);
    const rightAnswer = progression[shadowedNum];
    const question = progression.map((num) => {
      if (rightAnswer === num) {
        return '..';
      }
      return num;
    }).join(' ');
    return [rightAnswer, question];
  };

  gameEngine(gameDescription, genAnswerQuestion);
};

export default progressionGame;
