import readlineSync from 'readline-sync';

const greetPlayer = () => console.log('Welcome to the Brain Games!\n');

let userName = '';

const helloUser = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

const evenGame = () => {
  console.log('Answer \"yes\" if number even otherwise answer \"no\".\n');
  helloUser();

  const generateNum = () => Math.floor(Math.random() * Math.floor(20));

  //write function for checking even
  const checkNum = () => {};

  let rightnessCounter = 0;
  while (rightnessCounter < 3) {
    const randomNum = generateNum();
    const userReply = readlineSync.question(`Question: ${randomNum}`);
    const isEven = checkNum(randomNum);
    if (userReply === 'yes' || userReply === 'no') {
      if (isEven && userReply === 'yes') {
        rightnessCounter += 1;
      }

      if (!isEven && userReply === 'no') {
        rightnessCounter += 1;
      }
    } else {
      return `${userReply}Wrong answer, please try again and type \"yes\" or \"no\" as answers`;
    }
  }
  //if right = go ahead
  //if 3 right answer = congratulate user
}

export { evenGame, greetPlayer};
