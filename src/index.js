import readlineSync from 'readline-sync';
import { getGameCondition } from './utils';

const answerLimit = 3;

const gameEngine = (gameData, answerQuestionGenerator) => {
  console.log('Welcome to the Brain Games!');
  const [gameReply, answerVariant, inputType] = gameData();
  const [inputCondition, answerCondition] = getGameCondition(inputType);
  console.log(`${gameReply}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  for (let i = 1; i <= answerLimit; i += 1) {
    const [rightAnswer, question] = answerQuestionGenerator(1, 100);
    console.log(`Question: ${question}`);
    const userReply = readlineSync.question('Your answer: ');
    if (inputCondition(userReply)) {
      if (answerCondition(rightAnswer, userReply)) {
        console.log('Correct!');
      } else {
        console.log(`'${userReply}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
        console.log(`Let's try again, ${userName}!`);
        return 0;
      }
    } else {
      console.log(`"${userReply}" is wrong answer, please try again and type ${answerVariant} as answer`);
      return 0;
    }
    if (i === answerLimit) {
      console.log(`Congratulations ${userName}!`);
    }
  }
  return 0;
};

export default gameEngine;
