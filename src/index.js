import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n');

const helloUser = () => {
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello ${userName}!`);
};

export default helloUser;