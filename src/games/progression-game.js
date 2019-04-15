import gameEngine from '..';
import generateNum from '../utils';

const progressionLength = 10;

const progressionGame = () => {
  const gameReply = 'What number is missing in the progression?';

  const getAnswerQuestion = () => {
    const diff = generateNum(0, 10);
    const start = generateNum(0, 10);
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
    return [rightAnswer.toString(), question];
  };

  gameEngine(gameReply, getAnswerQuestion);
};

export default progressionGame;
