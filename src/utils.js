
const generateNum = (min, max) => Math.floor(Math.random(min) * Math.floor(max));

const getGameCondition = (type) => {
  if (type === 'text') {
    const inputCondition = reply => reply === 'yes' || reply === 'no';
    const answerCondition = (answer, playerReply) => answer === playerReply;
    return [inputCondition, answerCondition];
  }
  if (type === 'number') {
    const inputCondition = reply => !Number.isNaN(reply);
    const answerCondition = (answer, playerReply) => answer === Number(playerReply);
    return [inputCondition, answerCondition];
  }
  return 0;
};

export { generateNum, getGameCondition };
