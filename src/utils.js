
const generateNum = (min, max) => Math.floor(Math.random(min) * Math.floor(max));
const isEven = num => num % 2 === 0;

export { generateNum, isEven };
