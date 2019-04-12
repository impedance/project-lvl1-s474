import readlineSync from 'readline-sync';
import evenGame from './games/even-game';
import calcGame from './games/calc-game';

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
  `"${reply}" is wrong answer, please try again and type ${answerVariant} as answers`
);

const wrongAnswerReply = (reply, rightAnswer, userName) => {
  console.log(`'${reply}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
  return console.log(`Let's try again, ${userName}!`);
}

export {
  rightAnswerLimit, userName, generateNum,
  evenGame, calcGame, wrongInputReply, wrongAnswerReply
};
