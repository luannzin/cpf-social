export const generateCpf: () => string = () => {
  let value = "";
  for (let i = 0; i < 9; i++) {
    value += Math.floor(Math.random() * 10);
  }

  let finalValue = 0;
  let position = 10;
  Array.from(value).forEach((value) => {
    finalValue += +value * position;
    position--;
  });

  const d1 =
    finalValue % 11 === 0 || finalValue % 11 === 1 ? 0 : 11 - (finalValue % 11);

  let newValue = value + d1;

  finalValue = 0;
  position = 10;

  Array.from(newValue.slice(1)).forEach((value) => {
    finalValue += +value * position;
    position--;
  });

  const d2 =
    finalValue % 11 === 0 || finalValue % 11 === 1 ? 0 : 11 - (finalValue % 11);

  const lastValue = newValue + d2;

  return lastValue;
};
