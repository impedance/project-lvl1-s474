import readlineSync from 'readline-sync';

const greetPlayer = () => console.log('Welcome to the Brain Games!');

let userName = '';

const helloUser = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
};

const evenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  helloUser();

  const randomLimit = 20;
  const rightAnswerLimit = 3;

  const generateNum = () => Math.floor(Math.random() * Math.floor(randomLimit));

  let rightnessCounter = 0;
  while (rightnessCounter <= rightAnswerLimit) {
    const randomNum = generateNum();
    console.log(`Question: ${randomNum}`);
    const userReply = readlineSync.question('Your answer: ');
    const isEven = randomNum % 2 === 0;
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

export { evenGame, greetPlayer };
