import readlineSync from 'readline-sync';
import { rightAnswerLimit, userName, generateNum } from '../index';

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
      if (Number(userReply) === rightAnswer) {
        rightnessCounter += 1;
        console.log('Correct!');
      } else {
        console.log(`'${userReply}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
        return console.log(`Let's try again, ${userName}!`);
      }
    } else {
      return console.log(`"${userReply}" is wrong answer, please try again and type 'number' as answers`);
    }
    if (rightnessCounter === rightAnswerLimit) {
      return console.log(`Congratulations ${userName}!`);
    }
  }
  return 0;
};

export default calcGame;
