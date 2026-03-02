function askNumber() {
  let lastValue;

  for (let i = 0; i < 10; i++) {
    let input = prompt("Введіть число більше 100");
    let number = Number(input);

    lastValue = number;

    if (number > 100) {
      break;
    }
  }

  console.log(lastValue);
}

askNumber();