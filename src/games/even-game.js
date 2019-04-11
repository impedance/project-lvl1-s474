import readlineSync from 'readline-sync';
import { rightAnswerLimit, userName, generateNum } from '../index';

const evenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  for (let rightnessCounter = 0; rightnessCounter <= rightAnswerLimit;) {
    const questionNum = generateNum(1, 20);
    console.log(`Question: ${questionNum}`);
    const userReply = readlineSync.question('Your answer: ');
    const isEven = questionNum % 2 === 0;
    const rightAnswer = isEven ? 'yes' : 'no';
    if (userReply === 'yes' || userReply === 'no') {
      if (rightAnswer === userReply) {
        rightnessCounter += 1;
        console.log('Correct!');
      } else {
        console.log(`'${userReply}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
        return console.log(`Let's try again, ${userName}!`);
      }
    } else {
      return console.log(`"${userReply}" is wrong answer, please try again and type "yes" or "no" as answers`);
    }
    if (rightnessCounter === rightAnswerLimit) {
      return console.log(`Congratulations ${userName}!`);
    }
  }
  return 0;
};

export default evenGame;
