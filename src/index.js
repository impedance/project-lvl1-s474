import readlineSync from 'readline-sync';

const answerLimit = 3;

const gameEngine = (gameData, questionGenerator) => {
  console.log('Welcome to the Brain Games!');
  const [gameReply, answerVariant, inputCondition, answerCondition] = gameData();
  console.log(`${gameReply}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  for (let i = 0; i <= answerLimit;) {
    const [rightAnswer, question] = questionGenerator();
    console.log(`Question: ${question}`);
    const userReply = readlineSync.question('Your answer: ');
    if (inputCondition(userReply)) {
      if (answerCondition(rightAnswer, userReply)) {
        i += 1;
        console.log('Correct!');
      } else {
        console.log(`'${userReply}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
        return console.log(`Let's try again, ${userName}!`);
      }
    } else {
      return console.log(`"${userReply}" is wrong answer, please try again and type ${answerVariant} as answer`);
    }
    if (i === answerLimit) {
      return `Congratulations ${userName}!`;
    }
  }
  return 0;
};

export default gameEngine;
