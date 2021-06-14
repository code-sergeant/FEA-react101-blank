export const getRandomIntegerInRange = (min = 1, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const makeRandomDateString = () =>
  new Date(
    getRandomIntegerInRange(2000, 2050),
    getRandomIntegerInRange(0, 11),
    getRandomIntegerInRange(1, 28)
  ).toDateString();

export const makeRandomTaskText = () =>
  `Task Item ${getRandomIntegerInRange(1, 100)}`;
