const cpfValid = document.querySelector("#cpfValid");

const cpfLastDigits = document.querySelector("#cpfLastDigits");

const generated = document.querySelector("#generated");

const lastDigits = (cpf) => {
  const value = cpf;
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

const generateLastDigits = () => {
  console.log(lastDigits(cpfLastDigits.value));
};

const generateCpf = () => {
  let value = "";
  for (let i = 0; i < 9; i++) {
    value += Math.floor(Math.random() * 10);
  }

  generated.innerHTML = lastDigits(value);
};

const isValidCpf = () => {
  const newValue = cpfValid.value.slice(0, 9);

  if (cpfValid.value === lastDigits(newValue)) {
    console.log("Válido");
  } else {
    console.log("Inválido");
  }
};
