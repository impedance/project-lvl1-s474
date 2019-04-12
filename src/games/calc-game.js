import readlineSync from 'readline-sync';
import { rightAnswerLimit, userName, generateNum, wrongInputReply, wrongAnswerReply } from '../index';

const calcGame = () => {
  console.log('What is the result of the expression?\n');
  const operations = [
    [(a, b) => a + b, '+'],
    [(a, b) => a * b, '*'],
    [(a, b) => a - b, '-'],
  ];
  for (let rightnessCounter = 0; rightnessCounter <= rightAnswerLimit;) {
    const [firstNum, secondNum] = [generateNum(1, 20), generateNum(1, 20)];
    const operation = operations[generateNum(0, 3)];
    const rightAnswer = operation[0](firstNum, secondNum);
    console.log(`Question: ${firstNum} ${operation[1]} ${secondNum}`);
    const userReply = readlineSync.question('Your answer: ');
    if (!Number.isNaN(userReply)) {
      if (rightAnswer === Number(userReply)) {
        rightnessCounter += 1;
        console.log('Correct!');
      } else {
        wrongAnswerReply(userReply, rightAnswer, userName);
      }
    } else {
      wrongInputReply(userReply, 'number');
    }
    if (rightnessCounter === rightAnswerLimit) {
      return console.log(`Congratulations ${userName}!`);
    }
  }
  return 0;
};

export default calcGame;
