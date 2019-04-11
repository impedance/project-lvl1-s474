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

export {
  rightAnswerLimit, userName, generateNum,
  evenGame, calcGame,
};
