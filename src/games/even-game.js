import { generateNum } from '../index';

console.log('Answer "yes" if number even otherwise answer "no".\n');

const getEvenGameData = () => {
  const random = generateNum(1, 20);
  const isEven = random % 2 === 0;
  const rightAnswer = isEven ? 'yes' : 'no';
  const answerVariant = 'yes or no';
  const question = `Question: ${random}`;
  const inputCondition = reply => reply === 'yes' || reply === 'no';
  const answerCondition = (answer, playerReply) => answer === playerReply;
  return [question, rightAnswer, answerVariant, inputCondition, answerCondition];
};

export default getEvenGameData;
