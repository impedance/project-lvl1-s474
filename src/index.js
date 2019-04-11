import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const helloUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!\n`);
  return name;
};

const generateNum = (min, max) => Math.floor(Math.random(min) * Math.floor(max));
const rightAnswerLimit = 3;
const userName = helloUser();
const operations = [
  [(a, b) => a + b, '+'],
  [(a, b) => a * b, '*'],
  [(a, b) => a - b, '-'],
];

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

const calcGame = () => {
  console.log('What is the result of the expression?\n');
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

export { evenGame, calcGame };
