import { generateNum } from '../index';

const getEvenGameData = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const questionNum = generateNum(1, 20);
  const isEven = questionNum % 2 === 0;
  const rightAnswer = isEven ? 'yes' : 'no';
  const answerVariant = 'yes or no';
  const question = `Question: ${questionNum}`;
  const inputCondition = reply => reply === 'yes' || reply === 'no';
  const answerCondition = (answer, playerReply) => answer === playerReply;
  return [question, rightAnswer, answerVariant, inputCondition, answerCondition];
};

export default getEvenGameData;
