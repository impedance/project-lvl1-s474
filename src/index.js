import readlineSync from 'readline-sync';
import evenGame from './games/even-game';
import getCalcGameData from './games/calc-game';

console.log('Welcome to the Brain Games!');

const helloUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!\n`);
  return name;
};

const generateNum = (min, max) => Math.floor(Math.random(min) * Math.floor(max));
const rightAnswerLimit = 3;
const userName = helloUser();

const wrongInputReply = (reply, answerVariant) => (
  console.log(`"${reply}" is wrong answer, please try again and type ${answerVariant} as answers`)
);

const wrongAnswerReply = (reply, rightAnswer, playerName) => {
  console.log(`'${reply}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
  return console.log(`Let's try again, ${playerName}!`);
};

const gameEngine = () => {
  for (let rightnessCounter = 0; rightnessCounter <= rightAnswerLimit;) {
    const [question, rightAnswer] = getCalcGameData();
    console.log(question);
    const userReply = readlineSync.question('Your answer: ');
    if (!Number.isNaN(userReply)) {
      if (rightAnswer === Number(userReply)) {
        rightnessCounter += 1;
        console.log('Correct!');
      } else {
        return wrongAnswerReply(userReply, rightAnswer, userName);
      }
    } else {
      return wrongInputReply(userReply, 'yes or no');
    }
    if (rightnessCounter === rightAnswerLimit) {
      return console.log(`Congratulations ${userName}!`);
    }
  }
  return 0;
};

export {
  rightAnswerLimit, userName, generateNum,
  evenGame, wrongInputReply, wrongAnswerReply, gameEngine,
};
