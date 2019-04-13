import readlineSync from 'readline-sync';

const generateNum = (min, max) => Math.floor(Math.random(min) * Math.floor(max));

const gameEngine = (gameData, questionGenerator) => {
  console.log('Welcome to the Brain Games!');
  const [gameReply, answerVariant, inputCondition, answerCondition] = gameData();
  console.log(gameReply);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  const rightAnswerLimit = 3;
  for (let rightnessCounter = 0; rightnessCounter <= rightAnswerLimit;) {
    const [rightAnswer, question] = questionGenerator();
    console.log(question);
    const userReply = readlineSync.question('Your answer: ');
    if (inputCondition(userReply)) {
      if (answerCondition(rightAnswer, userReply)) {
        rightnessCounter += 1;
        console.log('Correct!');
      } else {
        console.log(`'${userReply}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
        return console.log(`Let's try again, ${userName}!`);
      }
    } else {
      return console.log(`"${userReply}" is wrong answer, please try again and type ${answerVariant} as answers`);
    }
    if (rightnessCounter === rightAnswerLimit) {
      return console.log(`Congratulations ${userName}!`);
    }
  }
  return 0;
};

export { generateNum, gameEngine };
