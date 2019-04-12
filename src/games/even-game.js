import readlineSync from 'readline-sync';
import { rightAnswerLimit, userName, generateNum, wrongInputReply, wrongAnswerReply } from '../index';

const evenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  for (let rightnessCounter = 0; rightnessCounter <= rightAnswerLimit;) {
    const questionNum = generateNum(1, 20);
    const isEven = questionNum % 2 === 0;
    const rightAnswer = isEven ? 'yes' : 'no';
    console.log(`Question: ${questionNum}`);
    const userReply = readlineSync.question('Your answer: ');
    if (userReply === 'yes' || userReply === 'no') {
      if (rightAnswer === userReply) {
        rightnessCounter += 1;
        console.log('Correct!');
      } else {
        wrongAnswerReply(userReply, rightAnswer, userName);
      }
    } else {
      wrongInputReply(userReply, 'yes or no');
    }
    if (rightnessCounter === rightAnswerLimit) {
      return console.log(`Congratulations ${userName}!`);
    }
  }
  return 0;
};

export default evenGame;
