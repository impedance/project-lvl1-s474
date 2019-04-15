import readlineSync from 'readline-sync';

const answerLimit = 3;

const gameEngine = (gameDescription, answerQuestionGenerator) => {
  console.log('Welcome to the Brain Games!');
  const { gameReply, answerVariant } = gameDescription;
  console.log(`${gameReply}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  for (let i = 1; i <= answerLimit; i += 1) {
    const [rightAnswer, question] = answerQuestionGenerator();
    console.log(`Question: ${question}`);
    const userReply = readlineSync.question('Your answer: ');
    if (rightAnswer === userReply) {
      console.log('Correct!');
    } else {
      console.log(`'${userReply}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === answerLimit) {
      console.log(`Congratulations ${userName}!`);
    }
  }
  return 0;
};

export default gameEngine;
